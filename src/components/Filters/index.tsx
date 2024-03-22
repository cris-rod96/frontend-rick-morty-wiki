import React, { ChangeEvent } from "react";

type FiltersType = {
  cant: number;
  filterByName: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Filters: React.FC<FiltersType> = ({ cant, filterByName }) => {
  return (
    <div className="w-full flex justify-between items-center py-5 border-b">
      <h3 className="opacity-55 flex gap-2 items-center">
        <span>{cant}</span>
        personajes
      </h3>
      <input
        type="text"
        className="w-[400px] px-2 py-3 outline-none text-lg border border-gray-500/30 rounded-xl text-gray-500"
        placeholder="Type a Name"
        onChange={filterByName}
      />
    </div>
  );
};
