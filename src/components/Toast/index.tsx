import React from "react";
import { RiCloseFill } from "react-icons/ri";

type ToastProps = {
  open: boolean;
  msg: string;
  type: string;
  close: () => void;
};

export const Toast: React.FC<ToastProps> = ({ open, msg, type, close }) => {
  return (
    <div
      className={`fixed top-3 text-white rounded-lg ${
        open ? "right-3" : "-right-full"
      } ${
        type === "error" ? "bg-red-800" : "bg-green-700"
      } transition-all duration-300 flex items-center gap-3 px-5 py-3 z-50`}
    >
      <span>{msg}</span>
      <RiCloseFill
        size={20}
        onClick={close}
        className="cursor-pointer scale-110 transition-all duration-300"
      />
    </div>
  );
};
