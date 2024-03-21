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
