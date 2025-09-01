<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    import Header from '$lib/components/Header.svelte';
    import Legend from '$lib/components/Legend.svelte';
    import InfoPanel from '$lib/components/InfoPanel.svelte';

    let earthquakes = [];
    let selectedQuake = null;
    let MapComponent = null; 

    // This onMount fetches the data ONCE when the page loads.
    onMount(async () => {
        if (browser) {
            MapComponent = (await import('$lib/components/Map.svelte')).default;
        }

        const response = await fetch('/api/earthquakes');
        const data = await response.json();
        earthquakes = data.features;
    });

    function handleMarkerClick(quake) {
        selectedQuake = quake;
    }
</script>

<Header />
<Legend />
<InfoPanel bind:selectedQuake />

<div class="map-wrapper">
    {#if MapComponent}
        <svelte:component
            this={MapComponent}
            {earthquakes}
            onMarkerClick={handleMarkerClick}
        />
    {:else}
        <div class="loading-state">Loading Map...</div>
    {/if}
</div>

<style>
    .map-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }
    .loading-state {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: white;
        font-size: 1.5em;
    }
</style>