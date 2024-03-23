import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AboutPage,
  AuthPage,
  HomePage,
  NotFoundPage,
  WelcomePage,
} from "./pages";
import { RouterLayout } from "./common/RouterLayout";
import { FavoritesPage } from "./pages/Favorites";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
    </Routes>
  );
};
