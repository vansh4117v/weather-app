# ☀️ Weather Forecast App

A sleek, responsive weather application built with **React.js**. It displays current weather, hourly temperatures, and multi-day forecasts. Users can also search cities, mark favorites, and toggle between light and dark themes.

## 🔗 Live Demo

Check out the live version here: [https://weather-app-4117v.vercel.app/](https://weather-app-4117v.vercel.app/)

## 🚀 Features

* 🔍 **City Search** with autocomplete
* 📍 **Geolocation** to detect current location
* 🌦️ **Current Weather Details** (temperature, humidity, wind, etc.)
* 🕐 **Hourly Temperature** graphs
* 📅 **7-Day Forecast**
* ⭐ **Favorite Cities** list
* 🎨 **Light/Dark Theme Toggle**
* ⏳ **Loading Skeletons** for better UX
* 🧹 Modular and reusable UI components (via **shadcn/ui**)

## 💠 Tech Stack

* **Frontend**: React, JSX, CSS
* **UI Library**: [shadcn/ui](https://ui.shadcn.com/) (used in `components/ui`)
* **APIs**: OpenWeatherMap
* **UI Components**: Custom and shadcn/ui components + utility-based styling
* **State Management**: React Context + Custom Hooks

## 📁 Folder Structure

```
src/
│
├── api/                   # API config and weather fetch logic
├── components/            # UI & functional components
│   ├── ui/                # Reusable UI primitives from shadcn/ui (cards, tooltips, dialogs, etc.)
│
├── context/               # Theme provider and custom context
├── hooks/                 # Custom React hooks (geolocation, favorites)
├── lib/                   # Utility functions or helpers
├── pages/                 # Page-level components and routing
│
├── App.jsx                # Main app entry
├── main.jsx               # ReactDOM render logic
├── index.css              # Global styles
```

## 🌐 How to Run Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Add your API Key**:

   Create `.env` file with your OpenWeatherMap API key:

   ```js
   VITE_OPENWEATHER_API_KEY = 'your_api_key_here';
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

   The app will be live at [http://localhost:5173](http://localhost:5173)


## 📆 Build for Production

```bash
npm run build
```

---
<br>

**Made by vansh4117v**


