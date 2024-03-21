import React from "react";
import { LoginContainer, RegisterContainer } from "../../containers";

export const AuthPage: React.FC<{}> = () => {
  const [showRegister, setShowRegister] = React.useState<boolean>(false);
  const toggleRegister = () => setShowRegister(!showRegister);
  return (
    <div className="relative w-full h-screen grid lg:grid-cols-2 overflow-hidden">
      <div className="w-full relative h-full">
        <img
          src="/rick_fondo.jpg"
          alt=""
          className="absolute w-full h-full object-cover"
        />
      </div>

      {/* Forms */}
      <div className="w-full h-full relative">
        {/* Login */}
        <LoginContainer
          showRegister={showRegister}
          toggleRegister={toggleRegister}
        />

        {/* Register */}
        <RegisterContainer
          showRegister={showRegister}
          toggleRegister={toggleRegister}
        />
      </div>
    </div>
  );
};
