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

export const updateDataStorage = (
  key: string,
  property: string,
  value: string
) => {
  const dataStorage = getDataStorage(key);
  if (dataStorage) {
    dataStorage[property] = value;
    saveDataStorage(key, JSON.stringify(dataStorage));
    return dataStorage;
  }

  return null;
};
