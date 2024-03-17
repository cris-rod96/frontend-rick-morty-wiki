import React from "react";
import { Toast } from "../components/Toast";

type ContextProps = {
  getError: (msg: string) => void;
  getSuccess: (msg: string) => void;
};

const ToastContext = React.createContext<ContextProps | null>(null);

export const ToastProvider: React.FC<{ children: React.JSX.Element }> = ({
  children,
}) => {
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState("");
  const [type, setType] = React.useState("");

  const getError = (msg: string) => {
    setType("error");
    setOpen(true);
    setMsg(msg);
  };

  const getSuccess = (msg: string) => {
    setType("success");
    setOpen(true);
    setMsg(msg);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const value = {
    getError,
    getSuccess,
  };

  return (
    <ToastContext.Provider value={value}>
      <Toast close={handleClose} msg={msg} type={type} open={open} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) throw new Error("No existe contexto");
  return context;
};
