import React from "react";

type InputType = {
  type: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const Input: React.FC<InputType> = ({
  type,
  name,
  handleChange,
  value,
}) => {
  return (
    <input
      type={type}
      className="w-full bg-transparent px-3 outline-none text-gray-800"
      onChange={handleChange}
      value={value}
      name={name}
      id={name}
    />
  );
};
