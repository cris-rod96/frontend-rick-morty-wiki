import React from "react";
import { Heading, LoginFormComponent, SubHeading } from "../../components";
import { titles } from "../../assets/data";
import { RiArrowDownLine } from "react-icons/ri";

type LoginContainerProps = {
  showRegister: boolean;
  toggleRegister: () => void;
};

export const LoginContainer: React.FC<LoginContainerProps> = ({
  showRegister,
  toggleRegister,
}) => {
  return (
    <div
      className={`absolute lg:bg-transparent bg-neutral-800/50 w-full h-full flex justify-center items-center flex-col ${
        showRegister ? "-top-full" : "top-0"
      } transition-all duration-300`}
    >
      <div className="lg:w-2/3 space-y-5 px-16 lg:px-0">
        <Heading text={titles.login.heading} />
        <SubHeading text={titles.login.subheading} />
        <LoginFormComponent />
      </div>
      <button
        className="absolute bottom-5 flex flex-col gap-2 items-center lg:opacity-40 text-white lg:text-black"
        onClick={toggleRegister}
      >
        <span className="lg:text-xl text-2xl animate-pulse">Registro</span>
        <RiArrowDownLine size={30} className="animate-bounce" />
      </button>
    </div>
  );
};
