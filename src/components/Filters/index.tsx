import React, { ChangeEvent } from "react";

type FiltersType = {
  cant: number;
  filterByName: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Filters: React.FC<FiltersType> = ({ filterByName }) => {
  return (
    <input
      type="text"
      className="w-[400px] px-2 py-3 outline-none text-lg border border-gray-500/30 rounded-xl text-gray-500"
      placeholder="Type a Name"
      onChange={filterByName}
    />
  );
};
