import React from "react";
import { useToast } from "../../context/toast.context";
import { users } from "../../api/user";
import { AxiosError } from "axios";

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

  const resetForm = () => setUserData(initialState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    users
      .register(userData)
      .then((res) => {
        getSuccess(res.data.msg);
        resetForm();
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          getError(
            error.response?.data.msg || error.response?.data.errors[0].msg
          );
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    userData,
    handleChange,
    handleSubmit,
    loading,
  };
};
