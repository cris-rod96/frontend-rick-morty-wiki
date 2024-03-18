import React from "react";
import { useToast } from "../../context/toast.context";

type UserDataType = {
  email: string;
  nick: string;
  password: string;
};
export const useRegister = () => {
  const initialState = {
    nick: "",
    email: "",
    password: "",
  };
  const { getError, getSuccess } = useToast();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [userData, setUserData] = React.useState<UserDataType>({
    ...initialState,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [_, inputName] = name.split("register_");

    setUserData({
      ...userData,
      [inputName]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault;
    setLoading(true);
  };

  return {
    userData,
    handleChange,
    handleSubmit,
    loading,
  };
};
