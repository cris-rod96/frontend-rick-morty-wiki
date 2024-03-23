import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage: React.FC<{}> = () => {
  return (
    <div className="absolute w-full h-screen overflow-hidden bg-white top-0 left-0 z-50 flex flex-col justify-center items-center space-y-5">
      <h3 className="text-4xl">404 | ¿Te has perdido?</h3>
      <h5 className="text-xl">
        Clickea en el botón mágico para transportarte de nuevo al mundo de Rick
        & Morty
      </h5>
      <Link
        to={"/home"}
        className="px-5 py-3 text-white bg-green-700 rounded-lg animate-pulse hover:animate-none hover:shadow-xl hover:shadow-green-800 transition-all duration-300"
      >
        Click aquí
      </Link>
    </div>
  );
};
