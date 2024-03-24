import React from "react";

type SubHeadingProps = {
  text: string;
};

export const SubHeading: React.FC<SubHeadingProps> = ({ text }) => {
  return (
    <h3 className="lg:text-lg text-xl font-light lg:text-black text-gray-100 lg:text-balance lg:opacity-55">
      {text}
    </h3>
  );
};
