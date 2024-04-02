import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

interface LoadingComponentProps {
  loading: boolean;
}

export const LoadingComponent: React.FC<LoadingComponentProps> = ({
  loading,
}) => {
  return (
    <div
      className={`absolute w-screen h-screen top-0 left-0 overflow-hidden flex flex-col justify-center items-center space-y-3 z-50 bg-white ${
        loading ? "block" : "hidden"
      }`}
    >
      <BiLoaderCircle size={40} className="animate-[spin_2s_linear_infinite]" />
      <span>Cargando...</span>
    </div>
  );
};
