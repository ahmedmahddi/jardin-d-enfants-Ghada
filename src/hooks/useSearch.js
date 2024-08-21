import { useState, useMemo } from "react";
import { useDebounce } from "./useDebounce.js";

const useSearch = (initialData = [], initialQuery = "") => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const debouncedSetSearchQuery = useDebounce(setSearchQuery, 300);

  const filteredData = useMemo(() => {
    if (!searchQuery) return initialData;
    return initialData.filter(item => {
      const value = item.childName || item.name;
      return value && value.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [initialData, searchQuery]);

  return { filteredData, searchQuery, debouncedSetSearchQuery };
};

export default useSearch;
