import React from "react";

type SubHeadingProps = {
  text: string;
};

export const SubHeading: React.FC<SubHeadingProps> = ({ text }) => {
  return <h3 className="text-lg font-light text-balance opacity-55">{text}</h3>;
};
