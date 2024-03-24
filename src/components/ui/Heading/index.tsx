import React from "react";

type HeadingProps = {
  text: string;
};

export const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h2 className="text-3xl text-wrap lg:text-green-700 text-gray-300 font-bold">
      {text}
    </h2>
  );
};
