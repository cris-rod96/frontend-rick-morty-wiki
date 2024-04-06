import React from "react";

interface TitleProps {
  text: string;
}

export const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h2 className="text-2xl uppercase font-bold text-green-700 max-w-2xl relative before:absolute before:w- before:h-[3px] before:bg-green-700 before:w-[200px] before:-bottom-2 before:rounded-2xl mb-10">
      {text}
    </h2>
  );
};
