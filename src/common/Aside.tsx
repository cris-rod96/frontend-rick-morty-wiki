import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { RiHomeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { menu } from "../assets/data";

type AsideProps = {
  showAside: boolean;
  toggleAside: () => void;
};

export const Aside: React.FC<AsideProps> = ({ showAside, toggleAside }) => {
  return (
    <>
      <aside
        className={`lg:w-[13vw] md:w-[40vw] w-[70vw] fixed top-0 lg:left-0 h-full bg-dark border-r border-gray-500/30 flex flex-col z-50 ${
          showAside ? "left-0" : "-left-full"
        } transition-all duration-300`}
      >
        <section className="p-8 space-y-4 group border-b border-gray-500/30">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <img
              src=""
              alt=""
              className="absolute w-full h-full object-cover rounded-full group-hover:scale-110 transition-all duration-300"
            />
          </div>
          <h3 className="text-gray-500 text-sm group-hover:text-white transition-all duration-300">
            Cristhian Rodríguez
          </h3>
        </section>

        <section className="flex flex-col justify-between h-full">
          <ul>
            {menu.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-8 py-5 flex items-center gap-2 text-gray-500 hover:text-white hover:bg-gray-500/10 border-b border-gray-500/30"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
          </ul>
          <button className="px-8 py-5 border-t border-gray-500/30 text-gray-500 hover:text-white transition-all duration-300 flex items-center gap-2">
            <IoMdLogOut size={20} />
            <span>Cerrar sesión</span>
          </button>
        </section>
      </aside>
      <div
        onClick={toggleAside}
        className={`fixed w-full h-full bg-black/15 z-40 ${
          showAside ? "block" : "hidden"
        } transition-all duration-150`}
      />
    </>
  );
};
