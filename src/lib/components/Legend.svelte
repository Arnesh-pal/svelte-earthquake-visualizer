<script>
    const legendItems = [
        { mag: '0 - 1', color: '#4caf50' },
        { mag: '1 - 2.5', color: '#ffeb3b' },
        { mag: '2.5 - 4.5', color: '#ff9800' },
        { mag: '4.5 - 6.5', color: '#f44336' },
        { mag: '> 6.5', color: '#b71c1c' },
    ];
</script>

<div class="legend-container">
    <h4>Magnitude</h4>
    <ul>
        {#each legendItems as item}
            <li>
                <span class="color-box" style="background-color: {item.color}; box-shadow: 0 0 8px {item.color};"></span>
                {item.mag}
            </li>
        {/each}
    </ul>
</div>

<style>
    .legend-container {
        position: absolute;
        bottom: 30px;
        right: 20px;
        z-index: 1000;
        padding: 15px 20px;
        background: rgba(17, 24, 39, 0.8);
        border-radius: 12px;
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        font-size: 0.9em;
    }
    h4 {
        margin: 0 0 10px 0;
        text-align: center;
        font-weight: 500;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding-bottom: 8px;
    }
    ul { list-style: none; padding: 0; margin: 0; }
    li { display: flex; align-items: center; margin-bottom: 8px; }
    li:last-child { margin-bottom: 0; }
    .color-box {
        width: 18px;
        height: 18px;
        margin-right: 12px;
        border-radius: 4px;
        border: 1px solid rgba(255,255,255,0.2);
    }

    @media (max-width: 768px) {
        .legend-container {
            bottom: 20px;
            right: 10px;
            padding: 10px 15px;
            font-size: 0.8em;
        }
        .color-box {
            width: 15px;
            height: 15px;
        }
    }
</style>