import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    // The USGS API endpoint for significant earthquakes in the past day
    const USGS_API_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

    // Fetch the data from the USGS API
    const response = await fetch(USGS_API_URL);
    const data = await response.json();

    // SvelteKit's `json` helper correctly formats the response
    return json(data);
}
