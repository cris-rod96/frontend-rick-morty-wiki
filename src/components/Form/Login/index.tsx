import React from "react";
import { useLogin } from "../../../hooks";
import { Label } from "../..";
import { RiMailLine } from "react-icons/ri";
import { Input } from "../../ui";

export const LoginFormComponent: React.FC<{}> = () => {
  const { credentials, handleChange, handleSubmit } = useLogin();

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 mb-8">
        <Label text="Email" htmlFor="email" />
        <div className="flex border border-gray-500/30 rounded-lg bg-zinc-500 overflow-hidden">
          <div className="w-16 h-14 flex justify-center items-center text-white bg-zinc-600">
            <RiMailLine size={24} />
          </div>
          <Input
            name="email"
            type="email"
            value={credentials.email}
            handleChange={handleChange}
          />
        </div>
      </div>

      <button
        type="submit"
        className="py-4 w-full bg-green-600 text-white font-bold uppercase"
      >
        Iniciar sesión
      </button>
    </form>
  );
};
