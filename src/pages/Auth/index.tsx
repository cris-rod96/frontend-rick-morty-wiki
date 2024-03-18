import React from "react";
import { Heading, LoginFormComponent, SubHeading } from "../../components";
import { RiLockFill, RiMailLine } from "react-icons/ri";
import { LoginContainer } from "../../containers";

export const AuthPage: React.FC<{}> = () => {
  return (
    <div className="relative w-full h-screen grid lg:grid-cols-2">
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
        <LoginContainer />

        {/* Register */}
      </div>
    </div>
  );
};
