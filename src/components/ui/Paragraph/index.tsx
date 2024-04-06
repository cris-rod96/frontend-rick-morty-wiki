import React from "react";

interface ParagraphProps {
  text: string;
  classes?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ text, classes = "" }) => {
  return <p className={`text-lg text-wrap ${classes}`}>{text}</p>;
};
