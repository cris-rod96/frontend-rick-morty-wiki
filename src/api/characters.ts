import { instance } from "./base.api";

const endpoint = "characters";

export const characters = {
  getAll: ({ limit, page }: { limit?: number; page?: number }) => {
    return instance.get(
      `${endpoint}/list?limit=${limit || 10}&page=${page || 1}`
    );
  },

  getByName: ({
    name,
    limit,
    page,
  }: {
    name: string;
    limit?: number;
    page?: number;
  }) => {
    return instance.get(
      `${endpoint}/search?name=${name}&limit=${limit || 10}&page=${page || 1}`
    );
  },
};
