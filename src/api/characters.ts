import { instance } from "./base.api";

const endpoint = "characters";

export const characters = {
  getAll: () => {
    return instance.get(`${endpoint}/list`);
  },

  getByName: (name: string) => {
    return instance.get(`${endpoint}/search?name=${name}`);
  },
};
