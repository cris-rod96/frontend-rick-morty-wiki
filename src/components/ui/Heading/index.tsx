import React from "react";

type HeadingProps = {
  text: string;
};

export const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h2 className="text-3xl text-wrap text-green-700 font-bold">{text}</h2>
  );
};
