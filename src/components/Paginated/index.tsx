import React from "react";
import { RiArrowLeftCircleFill, RiArrowRightCircleFill } from "react-icons/ri";
import { PaginatedType } from "../../types/index.types";

export const PaginatedComponent: React.FC<PaginatedType> = ({
  nextPage,
  currentPage,
  prevPage,
  numPages,
  goNextPage,
  goPrevPage,
}) => {
  return (
    <div className="flex gap-2 items-center [&>button]:text-green-700">
      <button className="hover:text-green-600" onClick={goPrevPage}>
        <RiArrowLeftCircleFill size={30} />
      </button>
      <p className="flex items-center gap-1 [&>span]:text-xl opacity-55">
        <span>{currentPage}</span>
        de
        <span>{numPages}</span>
      </p>
      <button className="hover:text-green-600" onClick={goNextPage}>
        <RiArrowRightCircleFill size={30} />
      </button>
    </div>
  );
};
