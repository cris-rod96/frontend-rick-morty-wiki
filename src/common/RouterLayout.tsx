import React from "react";
import { Aside } from "./Aside";
import { Outlet } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";

export const RouterLayout: React.FC<{}> = () => {
  const [showAside, setShowAside] = React.useState<boolean>(false);

  const toggleAside = () => setShowAside(!showAside);

  return (
    <>
      <Aside showAside={showAside} toggleAside={toggleAside} />
      <main className="lg:pl-[13vw] lg:pt-[5vh] px-10 py-10">
        <button className="text-black lg:hidden" onClick={toggleAside}>
          <RiMenuLine size={30} />
        </button>
        <section className="container mx-auto">
          <Outlet />
        </section>
      </main>
    </>
  );
};
