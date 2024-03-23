import { instance } from "./base.api";
const endpoint = "favorites";

export const favorites = {
  addFavorite: (characterID: string, token: string) => {
    return instance.post(
      `${endpoint}/add`,
      { characterID },
      { headers: { "x-token": token } }
    );
  },
  removeFavorite: (characterID: string, token: string) => {
    return instance.delete(`${endpoint}/delete/${characterID}`, {
      headers: {
        "x-token": token,
      },
    });
  },
  getFavorites: (token: string) => {
    return instance.get(`${endpoint}/list`, {
      headers: {
        "x-token": token,
      },
    });
  },
};
