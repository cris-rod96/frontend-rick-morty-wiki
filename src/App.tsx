import { useNavigate } from "react-router-dom";
import { AppRouter } from "./Router";
import React from "react";
import { utilsCookies } from "./utils";

export const App = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = utilsCookies.getDataCookie("x-token");
    if (!token) navigate("/auth");
  }, [navigate]);

  return <AppRouter />;
};
