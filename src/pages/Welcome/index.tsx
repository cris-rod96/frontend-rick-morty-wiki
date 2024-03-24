import React from "react";
import { avatars } from "../../assets/data";
import { saveDataStorage, updateDataStorage } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../context/toast.context";
import { users } from "../../api/user";

export const WelcomePage: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { getError, getSuccess } = useToast();
  const [avatarSelected, setAvatarSelected] = React.useState("");
  const selectAvatar = (image: string) => setAvatarSelected(image);
  const saveAvatarStorage = () => {
    const newData = updateDataStorage("user_data", "avatar", avatarSelected);

    if (newData) {
      users
        .update(newData)
        .then((res) => {
          saveDataStorage("user_data", JSON.stringify(newData));
          getSuccess(res.data.msg);
          setTimeout(() => {
            navigate("/home");
          }, 3000);
        })
        .catch((error) => {
          getError(`Ocurrió un error. Intenta nuevamente: ${error}`);
        });
    } else {
      getError("Ocurrió un error. Intenta nuevamente");
    }
  };

  return (
    <div className="absolute w-full h-screen overflow-hidden bg-white flex flex-col justify-center items-center">
      <div className="lg:w-2/4 py-10 flex flex-col items-end space-y-5">
        <h2 className="text-center w-full text-3xl text-green-900 font-bold mb-5">
          Escoge al avatar de tu preferencia
        </h2>

        <div className="w-full border border-gray-500/20 rounded-lg grid grid-cols-3 items-center gap-3 py-10">
          {avatars.map((avatar) => (
            <div
              key={avatar.image}
              className="flex flex-col items-center gap-3 group cursor-pointer"
              onClick={() => selectAvatar(avatar.image)}
            >
              <div className="w-32 h-32 relative mx-auto">
                <img
                  src={avatar.image}
                  alt=""
                  className={`w-full h-full absolute object-cover group-hover:scale-110 transition-all duration-300 ${
                    avatarSelected === avatar.image
                      ? "drop-shadow-3xl"
                      : "drop-shadow-xl"
                  }`}
                />
              </div>
              <h5
                className={`text-lg font-bold group-hover:text-green-700 transition-all duration-300 ${
                  avatarSelected === avatar.image
                    ? "text-green-700"
                    : "text-black"
                }`}
              >
                {avatar.name}
              </h5>
            </div>
          ))}
        </div>
        <button
          className={`bg-green-600 px-5 py-3 text-white rounded-lg hover:bg-green-700 transition-all duration-300 ${
            avatarSelected ? "opacity-1" : "opacity-0"
          } transition-all duration-500`}
          onClick={saveAvatarStorage}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};
