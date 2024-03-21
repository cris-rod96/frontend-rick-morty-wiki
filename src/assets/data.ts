import {
  RiHeartLine,
  RiHomeLine,
  RiLockFill,
  RiMailLine,
  RiUserLine,
} from "react-icons/ri";

// Menu
export const menu = [
  {
    to: "/home",
    icon: RiHomeLine,
    label: "Inicio",
  },
  {
    to: "/favorites",
    icon: RiHeartLine,
    label: "Favoritos",
  },
  {
    to: "/about",
    icon: RiUserLine,
    label: "Acerca de",
  },
];

// Heading, SubHeadings

export const titles = {
  login: {
    heading: "Vuelve a tu universo. Inicia sesión",
    subheading:
      "Reanuda tu exploración del multiverso de personajes. Inicia sesión para acceder a tu colección personalizada y sumérgete en la diversidad cósmica de Rick and Morty.",
  },
  register: {
    heading: "Únete al Círculo Multiversal de Personajes: ¡Regístrate ahora!",
    subheading:
      "Embárcate en un viaje cósmico al registrarte en nuestra app. Conviértete en parte del círculo multiversal de personajes de Rick and Morty y descubre exclusivos perfiles de tus protagonistas favoritos. ",
  },
};
