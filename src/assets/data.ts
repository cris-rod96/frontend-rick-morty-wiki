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
};
