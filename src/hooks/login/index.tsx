import React from "react";
import { useToast } from "../../context/toast.context";
import { auth } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { UserResponseType } from "../../types/index.types";
import { utilsCookies, utilsStorage } from "../../utils";
import { AxiosError } from "axios";

type CredentialsType = {
  email: string;
  password: string;
};
export const useLogin = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const { getError } = useToast();
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const [credentials, setCredentials] = React.useState<CredentialsType>({
    ...initialState,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const resetForm = () => setCredentials(initialState);

  const saveData = (user: UserResponseType, token: string) => {
    utilsStorage.saveDataStorage("user_data", JSON.stringify(user));
    utilsCookies.setDataCookie("x-token", token);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    auth
      .login(credentials)
      .then((res) => {
        const { user, token } = res.data;
        saveData(user, token);
        if (user.avatar === null) {
          navigate("/welcome");
        } else {
          navigate("/home");
          resetForm();
        }
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
    credentials,
    handleChange,
    handleSubmit,
    loading,
  };
};
