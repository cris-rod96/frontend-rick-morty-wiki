export type UserDataType = {
  nick: string;
  email: string;
  password: string;
};

export type CredentialsType = {
  email: string;
  password: string;
};

export type UserResponseType = {
  id: string;
  nick: string;
  email: string;
  avatar?: string;
};

export type CharacterType = {
  id: string;
  name: string;
  location: string;
  origin: string;
  gender: string;
  status: string;
  image: string;
};

export type CardCharacterFunctionsType = {
  checkFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

export type CardCharacterType = CharacterType & CardCharacterFunctionsType;
