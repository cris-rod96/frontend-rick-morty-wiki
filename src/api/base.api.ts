import axios from "axios";
import { BASE_URL_ENDPOINT } from "../assets/data";

export const instance = axios.create({
  baseURL: BASE_URL_ENDPOINT,
  withCredentials: true,
});
