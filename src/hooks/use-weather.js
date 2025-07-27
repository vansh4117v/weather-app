import { useCallback } from "react";
import { weatherAPI } from "@/api/weather";
import { useFetch } from "./useFetch";

export function useWeatherQuery(coordinates) {
  const lat = coordinates?.lat;
  const lon = coordinates?.lon;

  const fetchWeather = useCallback(
    () => weatherAPI.getCurrentWeather({ lat: lat ?? 0, lon: lon ?? 0 }),
    [lat, lon]
  );

  return useFetch(fetchWeather, !!coordinates);
}

export function useForecastQuery(coordinates) {
  const lat = coordinates?.lat;
  const lon = coordinates?.lon;

  const fetchForecast = useCallback(
    () => weatherAPI.getForecast({ lat: lat ?? 0, lon: lon ?? 0 }),
    [lat, lon]
  );

  return useFetch(fetchForecast, !!coordinates);
}

export function useReverseGeocodeQuery(coordinates) {
  const lat = coordinates?.lat;
  const lon = coordinates?.lon;

  const fetchLocation = useCallback(
    () => weatherAPI.reverseGeocode({ lat: lat ?? 0, lon: lon ?? 0 }),
    [lat, lon]
  );

  return useFetch(fetchLocation, !!coordinates);
}

export function useLocationSearch(query) {
  const fetchSearch = useCallback(() => weatherAPI.searchLocations(query), [query]);

  return useFetch(fetchSearch, query.length >= 3);
}
