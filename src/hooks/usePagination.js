import { useState } from "react";

const usePagination = (initialPage = 1, initialLimit = 10) => {
  const [page, setPage] = useState(initialPage);
  const [limit] = useState(initialLimit);
  const [totalCount, setTotalCount] = useState(0);

  const handleNextPage = () => {
    if (page * limit < totalCount) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return {
    page,
    limit,
    totalCount,
    setTotalCount,
    handleNextPage,
    handlePreviousPage,
  };
};

export default usePagination;
