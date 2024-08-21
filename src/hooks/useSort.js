import { useState, useMemo, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

const useSort = (
  initialData = [],
  initialSortConfig = { key: null, direction: null }
) => {
  const [sortConfig, setSortConfig] = useState(initialSortConfig);

  const sortStrings = useCallback((a, b, direction) => {
    return direction === "asc" ? a.localeCompare(b) : b.localeCompare(a);
  }, []);

  const sortNumbers = useCallback((a, b, direction) => {
    const compA = a > b ? 1 : 0;
    const compB = a < b ? 1 : 0;
    if (direction === "asc") {
      return a < b ? -1 : compA;
    }
    return a > b ? -1 : compB;
  }, []);

  const sortData = useCallback(
    (a, b, key, direction) => {
      if (typeof a[key] === "string" && typeof b[key] === "string") {
        return sortStrings(a[key], b[key], direction);
      }
      return sortNumbers(a[key], b[key], direction);
    },
    [sortStrings, sortNumbers]
  );

  const sortedData = useMemo(() => {
    if (!initialData) return [];
    let sortableData = [...initialData];
    if (sortConfig.key) {
      sortableData.sort((a, b) =>
        sortData(a, b, sortConfig.key, sortConfig.direction)
      );
    }
    return sortableData;
  }, [initialData, sortConfig, sortData]);

  const handleSort = key => {
    let direction = "asc";
    if (sortConfig.key === key) {
      direction = sortConfig.direction === "asc" ? "desc" : "asc";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = key => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? (
        <FontAwesomeIcon icon={faSortUp} className="text-blue-500 ml-1" />
      ) : (
        <FontAwesomeIcon icon={faSortDown} className="text-blue-500 ml-1" />
      );
    }
    return (
      <span className="ml-1">
        <FontAwesomeIcon icon={faSortUp} className="text-gray-400" />
        <FontAwesomeIcon icon={faSortDown} className="text-gray-400" />
      </span>
    );
  };

  return { sortedData, sortConfig, handleSort, getSortIcon };
};

export default useSort;
