import React from "react";
import { useToast } from "../../context/toast.context";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  };

  return {
    credentials,
    handleChange,
    handleSubmit,
    loading,
  };
};
