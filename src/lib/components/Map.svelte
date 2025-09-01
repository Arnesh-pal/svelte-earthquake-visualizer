<script>
	import { onMount, onDestroy } from 'svelte';

	export let earthquakes = [];
	export let onMarkerClick;

	let mapContainer; 
	let map;
	let layerGroup;

	onMount(() => {
        // Check if the user is on a mobile-sized screen
        const isMobile = window.innerWidth <= 768;
        // Set a wider zoom for mobile, a closer one for desktop
        const initialZoom = isMobile ? 1.5 : 2.5;

		map = L.map(mapContainer, { zoomControl: false }).setView([20, 0], initialZoom); 
		L.control.zoom({ position: 'bottomleft' }).addTo(map); 
		layerGroup = L.layerGroup().addTo(map);

		L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
			attribution: '&copy; CARTO | Made by <a href="https://github.com/Arnesh-pal" target="_blank" style="color: #a0a0a0; text-decoration: none;">Arnesh</a>'
		}).addTo(map);
	});

	$: if (layerGroup) {
		layerGroup.clearLayers();
		for (const quake of earthquakes) {
			const coords = quake.geometry.coordinates;
			const magnitude = quake.properties.mag;
			const marker = L.marker([coords[1], coords[0]], {
				icon: createMagnitudeIcon(magnitude)
			});
			marker.on('click', () => onMarkerClick(quake));
			marker.addTo(layerGroup);
		}
	}

	onDestroy(() => {
		if (map) map.remove();
	});

	function getMarkerColor(magnitude) {
		if (magnitude < 1) return '#4caf50';
		if (magnitude < 2.5) return '#ffeb3b';
		if (magnitude < 4.5) return '#ff9800';
		if (magnitude < 6.5) return '#f44336';
		return '#b71c1c';
	}

	function createMagnitudeIcon(magnitude) {
		const size = Math.max(magnitude * 6, 10);
		const color = getMarkerColor(magnitude);
		const pulseClass = magnitude >= 4.5 ? 'pulse' : ''; 
		const iconHtml = `<div class="marker-inner ${pulseClass}" style="width:${size}px; height:${size}px; background-color:${color}; box-shadow: 0 0 12px ${color};"></div>`;
		
		return L.divIcon({ 
			html: iconHtml, 
			className: 'magnitude-marker',
			iconSize: [size, size], 
			iconAnchor: [size / 2, size / 2] 
		});
	}
</script>

<div class="map-container" bind:this={mapContainer}></div>

<style>
	.map-container {
		width: 100%;
		height: 100%;
	}

	:global(.magnitude-marker .marker-inner) {
		border-radius: 50%;
		border: 2px solid rgba(255, 255, 255, 0.7);
		transition: transform 0.2s ease-in-out;
	}

	:global(.magnitude-marker:hover .marker-inner) {
		transform: scale(1.4);
		z-index: 1000;
	}

	:global(.pulse) {
		animation: pulse-animation 2s infinite;
	}

	@keyframes pulse-animation {
		0% {
			box-shadow: 0 0 12px 0px var(--color, rgba(255, 255, 255, 0.2));
		}
		100% {
			box-shadow: 0 0 12px 20px rgba(255, 255, 255, 0);
		}
	}
</style>

