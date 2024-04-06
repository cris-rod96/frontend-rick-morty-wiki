import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CardCharacter, LoadingComponent } from "../../components";
import { useHome } from "../../hooks/home";
import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const FavoritesPage: React.FC<{}> = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const navigate = useNavigate();
  const { isFavorite, checkFavorite, removeFavorite } = useHome();

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  const goToHome = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col space-y-5 py-5">
      <LoadingComponent loading={loading} />
      <h2 className="text-2xl uppercase font-bold text-green-700 max-w-2xl relative before:absolute before:w- before:h-[3px] before:bg-green-700 before:w-[200px] before:-bottom-2 before:rounded-2xl">
        Mis personajes favoritos
      </h2>

      {favorites.length > 0 ? (
        <div className="w-full flex flex-wrap justify-evenly">
          {favorites.map((favorite) => (
            <CardCharacter
              id={favorite.id}
              name={favorite.name}
              image={favorite.image}
              location={favorite.location}
              status={favorite.status}
              gender={favorite.gender}
              origin={favorite.origin}
              key={favorite.id}
              checkFavorite={checkFavorite}
              removeFavorite={removeFavorite}
              isFavorite={isFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col mt-5">
          <h3>Aún no has agregado personajes a tu lista de favoritos</h3>
          <button
            className="w-fit flex items-center gap-3 mt-3 px-5 py-3 bg-green-800 text-white rounded-lg text-sm"
            onClick={goToHome}
          >
            <RiArrowLeftLine />
            <span>Ir al inicio</span>
          </button>
        </div>
      )}
    </div>
  );
};
