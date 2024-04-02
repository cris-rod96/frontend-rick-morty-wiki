import React, { useEffect, useState } from "react";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { menu } from "../assets/data";
import { UserResponseType } from "../types/index.types";
import { utilsCookies, utilsStorage } from "../utils";

type AsideProps = {
  showAside: boolean;
  toggleAside: () => void;
};

export const Aside: React.FC<AsideProps> = ({ showAside, toggleAside }) => {
  const [user, setUser] = useState<UserResponseType>();

  const removeStorageCookie = () => {
    utilsStorage.removeDataStorage("user_data");
    utilsCookies.removeDataCookie("x-token");
  };

  useEffect(() => {
    const userData = utilsStorage.getDataStorage("user_data");
    setUser(userData);
  }, []);
  return (
    <>
      <aside
        className={`lg:w-[13vw] md:w-[40vw] w-[70vw] fixed top-0 lg:left-0 h-full bg-dark border-r border-gray-500/30 flex flex-col z-30 ${
          showAside ? "left-0" : "-left-full"
        } transition-all duration-300`}
      >
        <section className="py-8 space-y-3 group border-b border-gray-500/30 flex flex-col items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <img
              src={user?.avatar}
              alt=""
              className="absolute w-full h-full object-cover rounded-full group-hover:scale-110 transition-all duration-300"
            />
          </div>
          <h3 className="text-gray-500 text-lg group-hover:text-white transition-all duration-300">
            {user?.nick}
          </h3>
          <h5 className="text-sm text-gray-300 opacity-35 group-hover:text-white transition-all duration-300">
            {user?.email}
          </h5>
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
          {user !== null ? (
            <Link
              to={"/auth"}
              className="px-8 py-5 border-t border-gray-500/30 text-gray-500 hover:text-white transition-all duration-300 flex items-center gap-2"
              onClick={removeStorageCookie}
            >
              <IoMdLogOut size={20} />
              <span>Cerrar sesión</span>
            </Link>
          ) : (
            <Link
              to={"/auth"}
              className="px-8 py-5 border-t border-gray-500/30 text-gray-500 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <IoMdLogIn size={20} />
              <span>Iniciar sesión</span>
            </Link>
          )}
        </section>
      </aside>
      <div
        onClick={toggleAside}
        className={`fixed w-full h-full bg-black/15 z-20 ${
          showAside ? "block" : "hidden"
        } transition-all duration-150`}
      />
    </>
  );
};
