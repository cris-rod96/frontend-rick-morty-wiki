import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
