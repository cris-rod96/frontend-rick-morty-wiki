import React from "react";
import { Label } from "../..";
import { RiLockLine, RiMailLine, RiUserLine } from "react-icons/ri";
import { Input } from "../../ui";
import { useRegister } from "../../../hooks";

export const RegisterFormComponent: React.FC<{}> = () => {
  const { handleChange, handleSubmit, loading, userData } = useRegister();
  return (
    <form
      action=""
      className="py-5 border-t border-double border-gray-500/20 px-3"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-3 mb-8">
        <Label text="Nick" htmlFor="register_nick" />
        <div className="flex border border-gray-500/30 rounded-lg bg-white overflow-hidden">
          <div className="w-16 h-14 flex justify-center items-center text-white bg-zinc-500">
            <RiUserLine size={24} />
          </div>
          <Input
            name="register_nick"
            type="text"
            value={userData.nick}
            handleChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-8">
        <Label text="Email" htmlFor="register_email" />
        <div className="flex border border-gray-500/30 rounded-lg bg-white overflow-hidden">
          <div className="w-16 h-14 flex justify-center items-center text-white bg-zinc-500">
            <RiMailLine size={24} />
          </div>
          <Input
            name="register_email"
            type="email"
            value={userData.email}
            handleChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-8">
        <Label text="Contraseña" htmlFor="register_password" />
        <div className="flex border border-gray-500/30 rounded-lg bg-white overflow-hidden">
          <div className="w-16 h-14 flex justify-center items-center text-white bg-zinc-500">
            <RiLockLine size={24} />
          </div>
          <Input
            name="register_password"
            type="password"
            value={userData.password}
            handleChange={handleChange}
          />
        </div>
      </div>
      <button
        type="submit"
        className="py-4 w-full bg-green-600 text-white font-bold uppercase"
      >
        Registrarme
      </button>
    </form>
  );
};
