import React from "react";
import { PaginatedType } from "../../types/index.types";

export const usePagination = () => {
  const [dataPaginated, setDataPaginated] = React.useState<PaginatedType>({
    numPages: 0,
    nextPage: false,
    prevPage: false,
    currentPage: 1,
    goNextPage: () => {},
    goPrevPage: () => {},
  });

  return {
    dataPaginated,
    setDataPaginated,
  };
};
