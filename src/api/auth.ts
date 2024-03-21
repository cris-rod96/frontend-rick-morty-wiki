import { CredentialsType } from "../types/index.types";
import { instance } from "./base.api";

const endpoint = "auth";

export const auth = {
  login: (credentials: CredentialsType) => {
    return instance.post(`${endpoint}/signin`, { ...credentials });
  },
};
