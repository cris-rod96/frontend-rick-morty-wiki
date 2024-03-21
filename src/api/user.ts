import { UserDataType } from "../types/index.types";
import { getDataCookie } from "../utils/cookies";
import { instance } from "./base.api";

const endpoint = "users";

export const users = {
  register: (data: UserDataType) => {
    return instance.post(`${endpoint}/register`, { ...data });
  },

  update: (data: UserDataType) => {
    const token = getDataCookie("x-token");
    return instance.put(`${endpoint}/edit`, data, {
      headers: {
        "x-token": token,
      },
    });
  },
};
