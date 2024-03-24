import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { RiHeartLine, RiHomeLine, RiUserLine } from "react-icons/ri";
import { TfiGithub } from "react-icons/tfi";

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

// BASE_URL_ENDPOINT

export const BASE_URL_ENDPOINT = "https://backend-rick-morty-wiki.onrender.com";

// AVATARS

export const avatars = [
  { image: "/bet_smith.png", name: "Bet Smith" },
  { image: "/jerry_smith.png", name: "Jerry Smith" },
  { image: "morty_smith.png", name: "Morty Smith" },
  { image: "/rick_sanchez.png", name: "Rick Sanchez" },
  { image: "/summer_smith.png", name: "Summer Smith" },
];

// Social Media
export const media = [
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/cristhian-rodriguez-659779205/",
  },
  {
    icon: FaEnvelope,
    href: "mailto:crisrodam1996@gmail.com?subject=Colaboremos%20juntos",
  },
  {
    icon: TfiGithub,
    href: "https://github.com/cris-rod96",
  },
];
