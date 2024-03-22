import React, { ChangeEvent, useEffect } from "react";
import { characters } from "../../api/characters";
import { CharacterType } from "../../types/index.types";
import { CardCharacter, Filters } from "../../components";
import { utilsCookies } from "../../utils";
import { favorites } from "../../api/favorites";
import { useToast } from "../../context/toast.context";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../redux/slices/favoriteSlice";
import { RootState } from "../../redux/store";

export const HomePage: React.FC<{}> = () => {
  const favoriteCharacters = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const dispatch = useDispatch();
  const [data, setData] = React.useState<CharacterType[]>([]);
  const { getSuccess } = useToast();
  const filterByName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    characters.getByName(value).then((res) => {
      setData(res.data);
    });
  };

  const checkFavorite = (id: string) => {
    const token = utilsCookies.getDataCookie("x-token");
    if (token) {
      favorites
        .addFavorite(id, token)
        .then((res) => {
          getSuccess(res.data.msg);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    characters
      .getAll()
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const token = utilsCookies.getDataCookie("x-token");
    if (token) {
      favorites
        .getFavorites(token)
        .then((res) => {
          dispatch(getFavorites(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const isFavorite = (id: string) => {
    return favoriteCharacters.find((fav) => fav.id === id) !== undefined;
  };

  return (
    <div className="py-10">
      <Filters cant={data.length} filterByName={filterByName} />
      <div className="flex flex-wrap justify-evenly gap-5">
        {data.map((character) => (
          <CardCharacter
            id={character.id}
            name={character.name}
            gender={character.gender}
            status={character.status}
            image={character.image}
            location={character.location}
            origin={character.origin}
            checkFavorite={checkFavorite}
            isFavorite={isFavorite}
          />
        ))}
      </div>
    </div>
  );
};
