<header>
    <h1>Global Seismic Activity</h1>
    <p>Real-time data from the last 24 hours (USGS)</p>
</header>

<style>
    header {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
        text-align: center;
        padding: 12px 30px;
        background: rgba(17, 24, 39, 0.8);
        color: #f9fafb;
        border-radius: 12px;
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        width: max-content;
        max-width: 90%;
    }
    h1 {
        margin: 0;
        font-size: 1.6em;
        font-weight: 500;
        letter-spacing: 0.5px;
        text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    }
    p {
        margin: 4px 0 0;
        font-size: 0.9em;
        font-weight: 300;
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        header {
            padding: 8px 15px;
            top: 15px;
        }
        h1 {
            font-size: 1.1em;
        }
        p {
            font-size: 0.7em;
        }
    }
</style>