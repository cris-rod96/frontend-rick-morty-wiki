import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthPage, HomePage, WelcomePage } from "./pages";
import { RouterLayout } from "./common/RouterLayout";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
    </Routes>
  );
};
