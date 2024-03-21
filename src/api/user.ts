import { UserDataType } from "../types/index.types";
import { instance } from "./base.api";

const endpoint = "users";

export const users = {
  register: (data: UserDataType) => {
    return instance.post(`${endpoint}/register`, { ...data });
  },
};
