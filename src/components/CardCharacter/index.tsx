import React from "react";
import { CardCharacterType } from "../../types/index.types";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";

export const CardCharacter: React.FC<CardCharacterType> = ({
  id,
  image,
  name,
  gender,
  location,
  origin,
  status,
  checkFavorite,
  isFavorite,
}) => {
  return (
    <div className="flex flex-col items-center space-y-4 py-10 border-b group cursor-pointer">
      <div className="w-52 h-52 relative rounded-full overflow-hidden">
        <img
          src={image}
          alt=""
          className={`absolute w-full h-full border object-cover rounded-full ${
            status === "Dead" ? "grayscale" : "grayscale-1"
          } group-hover:scale-110 transition-all duration-300`}
        />
      </div>
      <div className="flex flex-col items-center [&>h3]:opacity-55 space-y-3">
        <h3>{name}</h3>
        <h3>{gender}</h3>
        <h3>{location}</h3>
        <h3>{origin}</h3>
        <h3>{status}</h3>

        <button
          className="hover:scale-110 transition-all duration-300"
          onClick={() => checkFavorite(id)}
        >
          {isFavorite(id) ? (
            <RiHeartFill size={32} className="text-red-500" />
          ) : (
            <RiHeartLine size={32} />
          )}
        </button>
      </div>
    </div>
  );
};
