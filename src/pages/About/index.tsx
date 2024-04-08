import React from "react";
import { media } from "../../assets/data";
import { Link } from "react-router-dom";
import { LoadingComponent } from "../../components";
import { Title } from "../../components/ui/Title";
import { Paragraph } from "../../components/ui/Paragraph";

export const AboutPage: React.FC<{}> = () => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <div className="flex flex-col space-y-5 py-5">
      <LoadingComponent loading={loading} />

      <Title text="Sobre el desarrollador" />
      <div className="relative lg:grid lg:grid-cols-12 flex flex-col items-center group">
        <div className="lg:col-span-4 flex justify-center relative mt-10 md:mt-0 lg:mt-0">
          <div className="lg:w-96 lg:h-96 w-52 h-52 relative mb-10 top-0   rounded-xl  transition-all duration-500 ">
            <img
              src="/profile.jpg"
              alt=""
              className="w-full h-full absolute object-cover rounded-xl "
            />
          </div>
        </div>
        <div className="col-span-8  max-w-3xl text-lg text-wrap font-light ">
          <Paragraph
            text="
            Hola, soy @cris-Rod96, desarrollador web full stack de Ecuador,
            apasionado por el backend y entusiasta del frontend. Recientemente,
            trabajé en este proyecto relacionado con 'Rick and Morty',
            utilizando tecnologías como Express, TypeScript, Redux Toolkit,
            Sequelize, PostgreSQL y React. Fuera del desarrollo, disfruto
            explorar nuevas tecnologías y compartir conocimientos con la
            comunidad. Si tienes un proyecto emocionante en mente, ¡estoy listo
            para enfrentarlo contigo!
            "
          />
          <Paragraph
            text="
            Para saber más de mi puedes contactarme por los siguientes medios"
            classes="mt-10"
          />

          <div className="relative md:bottom-5 flex items-center w-full left-0 justify-center gap-2 mt-10 lg:justify-start md:mt-10">
            {media.map((item) => (
              <Link
                to={item.href}
                key={item.href}
                className={`px-3 py-3 text-white ${item.bg} hover:scale-110 rounded-lg transition-all duration-300  flex items-center gap-3 text-sm `}
                target="__blank "
              >
                <item.icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
