import React from "react";

type LabelType = {
  htmlFor: string;
  text: string;
};

export const Label: React.FC<LabelType> = ({ htmlFor, text }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="lg:text-lg text-xl lg:opacity-55 text-white"
    >
      {text}
    </label>
  );
};
