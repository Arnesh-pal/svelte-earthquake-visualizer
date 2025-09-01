# 🌍 Svelte Earthquake Visualizer

![Node.js](https://img.shields.io/badge/node-%3E%3D16-green?logo=node.js&logoColor=white) 
![SvelteKit](https://img.shields.io/badge/SvelteKit-frontend-orange?logo=svelte&logoColor=white) 
![License](https://img.shields.io/badge/License-MIT-blue.svg) 
![Deployment](https://img.shields.io/badge/deployed%20on-Vercel-black?logo=vercel)

A sleek, responsive, and real-time global **earthquake visualizer** built with **SvelteKit** and **Leaflet**.  
This application fetches seismic activity from the **USGS Earthquake API** (last 24 hours) and displays it on an interactive map.

🔗 **[Live Demo](https://your-live-demo-link.com)**

---

## 📖 About The Project

The **Svelte Earthquake Visualizer** was created to provide a **modern, fast, and visually engaging** way to explore recent earthquake data.  
It serves as a **full-stack example of a SvelteKit application**, combining a backend API route to proxy data with a dynamic, interactive frontend map.

The user interface is **fully responsive**, ensuring a seamless experience on both **desktop and mobile** devices.

---

## ✨ Features

- **⚡ Real-time Data** – Fetches the latest earthquake data from the **USGS API** on page load.  
- **🗺️ Interactive Map** – Pan and zoom on a dark-themed **CartoDB world map**.  
- **📊 Dynamic Visualization** – Markers are **color-coded** and **sized** based on magnitude.  
- **ℹ️ Detailed Information** – Click a marker to view earthquake details in a modern info panel.  
- **🎯 Engaging UI** – Significant quakes show a **pulsing animation**, and markers **scale on hover**.  
- **📱 Fully Responsive** – Works beautifully on **all screen sizes**.  
- **🔌 Backend API Route** – A custom **SvelteKit API endpoint** proxies USGS requests, preventing CORS issues and optimizing data flow.  

---

## 🛠️ Tech Stack

- [SvelteKit](https://kit.svelte.dev/) – Full-stack framework for Svelte apps  
- [Svelte](https://svelte.dev/) – Next-gen UI framework  
- [Leaflet.js](https://leafletjs.com/) – Mobile-friendly interactive maps  
- [Vite](https://vitejs.dev/) – Fast, modern frontend tooling  
- HTML5 & CSS3 (Flexbox, media queries, animations)  
- [Vercel](https://vercel.com/) – Seamless deployment & hosting  

---

## 🚀 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) **v16+**
- npm (comes with Node.js)

### 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Arnesh-pal/svelte-earthquake-visualizer.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd svelte-earthquake-visualizer
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Your app should now be running at:
   👉 [http://localhost:5173](http://localhost:5173)

---

## 🌐 API Used

This project relies on the **U.S. Geological Survey (USGS) Earthquake API**:

* **Endpoint**:
  [`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson`](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson)

* **Description**:
  Provides **real-time earthquake data** for the past 24 hours in **GeoJSON** format.

---

## 📸 Screenshots

| Desktop View                                                                                                                                      | Mobile View                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="2840" height="1708" alt="Desktop Screenshot" src="https://github.com/user-attachments/assets/20eaa655-bfe8-4954-83e1-9266daf86f04" /> | <img width="898" height="1712" alt="Mobile Screenshot" src="https://github.com/user-attachments/assets/a47e2d56-98a8-47af-9128-d9fc48648f3d" /> |

---

## 📜 License

Distributed under the **MIT License**.
See [`LICENSE`](./LICENSE) for more information.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a PR.

---

## ⭐ Acknowledgements

* [USGS Earthquake API](https://earthquake.usgs.gov/)
* [Leaflet.js](https://leafletjs.com/)
* [CartoDB Basemaps](https://carto.com/)
* [SvelteKit](https://kit.svelte.dev/)

---

### 🌟 If you like this project, please give it a **star** on GitHub!
