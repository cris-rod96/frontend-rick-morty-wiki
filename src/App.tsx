import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";
import { ToastProvider } from "./context/toast.context";

export const App = () => {
  return (
    <ToastProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ToastProvider>
  );
};
