import cookies from "js-cookie";

export const setDataCookie = (key: string, value: string) => {
  cookies.set(key, value, {
    expires: new Date(new Date().getTime() + 3 * 60 * 60 * 1000),
  });
};

export const getDataCookie = (key: string) => cookies.get(key);
export const removeDataCookie = (key: string) => {
  cookies.remove(key);
};
