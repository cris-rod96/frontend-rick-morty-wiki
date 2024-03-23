import React from "react";
import { media } from "../../assets/data";
import { Link } from "react-router-dom";

export const AboutPage: React.FC<{}> = () => {
  return (
    <div className="flex flex-col space-y-5">
      <h2 className="text-2xl uppercase font-bold text-green-700 max-w-2xl relative before:absolute before:w- before:h-[3px] before:bg-green-700 before:w-[200px] before:-bottom-2 before:rounded-2xl mb-10">
        Sobre el desarrollador
      </h2>
      <div className="relative grid grid-cols-12 group">
        <div className="col-span-4 flex justify-center">
          <div className="w-96 h-96 absolute top-0   rounded-xl  transition-all duration-500 ">
            <img
              src="/profile.jpg"
              alt=""
              className="w-full h-full absolute object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="col-span-8  max-w-3xl text-lg text-wrap font-light ">
          <h2>
            Hola, soy @cris-Rod96, desarrollador web full stack de Ecuador,
            apasionado por el backend y entusiasta del frontend. Recientemente,
            trabajé en este proyecto relacionado con "Rick and Morty",
            utilizando tecnologías como Express, TypeScript, Redux Toolkit,
            Sequelize, PostgreSQL y React. Fuera del desarrollo, disfruto
            explorar nuevas tecnologías y compartir conocimientos con la
            comunidad. Si tienes un proyecto emocionante en mente, ¡estoy listo
            para enfrentarlo contigo!
          </h2>
          <h2 className="mt-10">
            Para saber más de mi puedes contactarme por los siguientes medios
          </h2>

          <div className="flex items-center gap-2 mt-3">
            {media.map((item) => (
              <Link
                to={item.href}
                key={item.href}
                className="px-3 py-3 text-white bg-gray-500 rounded-lg rotate-3 hover:rotate-0 transition-all duration-300"
                target="__blank"
              >
                <item.icon size={16} className="" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
