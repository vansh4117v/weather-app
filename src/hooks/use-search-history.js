import { useState } from "react";
import { useLocalStorage } from "./use-local-storage";

export function useSearchHistory() {
  const [history, setHistory] = useLocalStorage("search-history", []);
  const [loading, setLoading] = useState(false);

  async function addToHistory(search) {
    setLoading(true);

    const newSearch = {
      ...search,
      id: `${search.lat}-${search.lon}-${Date.now()}`,
      searchedAt: Date.now(),
    };

    const filteredHistory = history.filter(
      (item) => !(item.lat === search.lat && item.lon === search.lon)
    );
    const newHistory = [newSearch, ...filteredHistory].slice(0, 10);

    setHistory(newHistory);
    setLoading(false);
    return newHistory;
  }

  async function clearHistory() {
    setLoading(true);
    setHistory([]);
    setLoading(false);
    return [];
  }

  return {
    history,
    addToHistory,
    clearHistory,
    loading,
  };
}
