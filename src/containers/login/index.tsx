import React from "react";
import { Heading, LoginFormComponent, SubHeading } from "../../components";
import { titles } from "../../assets/data";

export const LoginContainer: React.FC<{}> = () => {
  return (
    <div className="absolute top-0 w-full h-full flex justify-center items-center">
      <div className="w-2/3 space-y-5">
        <Heading text={titles.login.heading} />
        <SubHeading text={titles.login.subheading} />
        <LoginFormComponent />
      </div>
    </div>
  );
};
