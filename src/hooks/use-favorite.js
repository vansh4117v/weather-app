import { useLocalStorage } from "./use-local-storage";

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  function addFavorite(city) {
    const newFavorite = {
      ...city,
      id: `${city.lat}-${city.lon}`,
      addedAt: Date.now(),
    };

    const exists = favorites.some((fav) => fav.id === newFavorite.id);
    if (exists) return;

    const newFavorites = [...favorites, newFavorite];
    setFavorites(newFavorites);
  }

  function removeFavorite(cityId) {
    const newFavorites = favorites.filter((city) => city.id !== cityId);
    setFavorites(newFavorites);
  }

  function isFavorite(lat, lon) {
    return favorites.some((city) => city.lat === lat && city.lon === lon);
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
}
