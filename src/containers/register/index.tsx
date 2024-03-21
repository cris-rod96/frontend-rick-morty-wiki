import React from "react";
import { Heading, SubHeading } from "../../components";
import { titles } from "../../assets/data";
import { RiArrowUpLine } from "react-icons/ri";
import { RegisterFormComponent } from "../../components/Form/Register";

type RegisterContainerProps = {
  showRegister: boolean;
  toggleRegister: () => void;
};

export const RegisterContainer: React.FC<RegisterContainerProps> = ({
  showRegister,
  toggleRegister,
}) => {
  return (
    <div
      className={`absolute w-full h-full flex justify-center items-center flex-col ${
        showRegister ? "bottom-0" : "-bottom-full"
      } transition-all duration-300`}
    >
      <div className="w-2/3 space-y-5">
        <Heading text={titles.register.heading} />
        <SubHeading text={titles.register.subheading} />
        <RegisterFormComponent />
      </div>

      <button
        className="absolute top-5 flex flex-col gap-2 items-center opacity-40"
        onClick={toggleRegister}
      >
        <RiArrowUpLine size={30} className="animate-bounce" />
        <span className="text-xl animate-pulse">Login</span>
      </button>
    </div>
  );
};
