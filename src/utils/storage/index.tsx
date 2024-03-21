export const saveDataStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getDataStorage = (key: string) => {
  const dataStorage = localStorage.getItem(key);
  return dataStorage ? JSON.parse(dataStorage) : null;
};

export const removeDataStorage = (key: string) => {
  localStorage.removeItem(key);
};
