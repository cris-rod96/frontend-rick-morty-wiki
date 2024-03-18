import React from "react";
import { useLogin } from "../../../hooks";
import { Label } from "../..";
import { RiLockLine, RiMailLine } from "react-icons/ri";
import { Input } from "../../ui";

export const LoginFormComponent: React.FC<{}> = () => {
  const { credentials, handleChange, handleSubmit } = useLogin();

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="py-5 border-t border-double border-gray-500/20 px-3"
    >
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

      <div className="flex flex-col gap-3 mb-8">
        <Label text="Contraseña" htmlFor="password" />
        <div className="flex border border-gray-500/30 rounded-lg bg-zinc-500 overflow-hidden">
          <div className="w-16 h-14 flex justify-center items-center text-white bg-zinc-600">
            <RiLockLine size={24} />
          </div>
          <Input
            name="password"
            type="password"
            value={credentials.password}
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
