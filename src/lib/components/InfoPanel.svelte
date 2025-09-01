<script>
    export let selectedQuake = null;
</script>

{#if selectedQuake}
<div class="info-panel">
    <button on:click={() => selectedQuake = null} aria-label="Close">&times;</button>
    <h2>Event Details</h2>
    <div class="details">
        <div class="detail-item">
            <span>Location</span>
            <strong>{selectedQuake.properties.place || 'N/A'}</strong>
        </div>
        <div class="detail-item">
            <span>Magnitude</span>
            <strong>{selectedQuake.properties.mag?.toFixed(2) ?? 'N/A'}</strong>
        </div>
        <div class="detail-item">
            <span>Time</span>
            <strong>{new Date(selectedQuake.properties.time).toLocaleString()}</strong>
        </div>
        <div class="detail-item">
            <span>Depth</span>
            <strong>{selectedQuake.geometry.coordinates[2]?.toFixed(2) ?? 'N/A'} km</strong>
        </div>
         <div class="detail-item">
            <span>Status</span>
            <strong>{selectedQuake.properties.status || 'N/A'}</strong>
        </div>
    </div>
    <a href={selectedQuake.properties.url} target="_blank" rel="noopener noreferrer" class="usgs-link">More Info on USGS</a>
</div>
{/if}

<style>
    /* --- DESKTOP STYLES (Default) --- */
    .info-panel {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 320px;
        z-index: 1000;
        background: rgba(17, 24, 39, 0.8);
        color: #f9fafb;
        border-radius: 12px;
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        animation: slideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        
        /* -- NEW FLEXBOX STYLES -- */
        display: flex;
        flex-direction: column;
        max-height: calc(100vh - 40px);
    }

    @keyframes slideIn {
        from { transform: translateX(-110%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }

    /* --- MOBILE STYLES --- */
    @media (max-width: 768px) {
        .info-panel {
            left: 5%;
            bottom: 20px;
            top: auto;
            width: 90%;
            max-height: 40vh; /* The panel's height is limited */
            animation: slideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        @keyframes slideUp {
            from { transform: translateY(110%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    }

    /* --- SHARED STYLES --- */
    h2 {
        margin: 0;
        padding: 20px 20px 10px 20px; /* Adjust padding */
        font-weight: 500;
        font-size: 1.25em;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        flex-shrink: 0; /* Prevents the header from shrinking */
    }

    .details {
        /* -- THIS IS THE KEY FIX -- */
        flex-grow: 1; /* Allows this area to grow */
        overflow-y: auto; /* Makes THIS area scrollable */
        padding: 0 20px; /* Use padding for spacing */
    }

    .detail-item {
        display: flex;
        flex-direction: column;
        margin: 15px 0; /* Increase spacing */
    }

    .detail-item span {
        font-size: 0.8em;
        color: #9ca3af;
        margin-bottom: 2px;
    }

    .detail-item strong {
        font-size: 1em;
        font-weight: 400;
    }

    .usgs-link {
        display: block; /* Use block for full width */
        margin: 20px;
        padding: 10px; /* Larger tap target */
        background-color: #3b82f6;
        color: white;
        text-decoration: none;
        border-radius: 8px;
        text-align: center;
        transition: background-color 0.2s ease;
        flex-shrink: 0; /* Prevents the button from shrinking */
    }

    .usgs-link:hover {
        background-color: #2563eb;
    }
    
    button {
        position: absolute;
        top: 15px; /* Adjust position */
        right: 15px;
        background: transparent;
        border: none;
        color: #9ca3af;
        font-size: 1.8em;
        cursor: pointer;
        line-height: 1;
        padding: 5px;
        transition: color 0.2s ease;
        z-index: 10;
    }
    button:hover {
        color: white;
    }
</style>