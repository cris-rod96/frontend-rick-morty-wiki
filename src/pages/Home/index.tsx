import React, { ChangeEvent, useEffect } from "react";
import { characters } from "../../api/characters";
import { CharacterType, PaginatedType } from "../../types/index.types";
import { CardCharacter, Filters, PaginatedComponent } from "../../components";
import { utilsCookies } from "../../utils";
import { favorites } from "../../api/favorites";
import { useToast } from "../../context/toast.context";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../redux/slices/favoriteSlice";
import { RootState } from "../../redux/store";

export const HomePage: React.FC<{}> = () => {
  const [data, setData] = React.useState<CharacterType[]>([]);
  const [dataPaginated, setDataPaginated] = React.useState<PaginatedType>({
    numPages: 0,
    nextPage: false,
    prevPage: false,
    currentPage: 1,
    goNextPage: () => {},
    goPrevPage: () => {},
  });

  const favoriteCharacters = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const dispatch = useDispatch();
  const { getSuccess } = useToast();

  const fetchCharacters = (page: number = 1) => {
    characters
      .getAll({
        page,
      })
      .then((res) => {
        const { characters, ...paginated } = res.data;
        setData(characters);
        setDataPaginated(paginated);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goNextPage = () => {
    if (dataPaginated.nextPage) {
      fetchCharacters(dataPaginated.currentPage + 1);
    }
  };
  const goPrevPage = () => {
    if (dataPaginated.prevPage) {
      fetchCharacters(dataPaginated.currentPage - 1);
    }
  };

  const getAllFavorites = () => {
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
  };

  const filterByName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    characters
      .getByName({
        name: value,
      })
      .then((res) => {
        const { characters, ...paginated } = res.data;
        setData(characters);
        setDataPaginated(paginated);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkFavorite = (id: string) => {
    const token = utilsCookies.getDataCookie("x-token");
    if (token) {
      favorites
        .addFavorite(id, token)
        .then((res) => {
          getSuccess(res.data.msg);
          getAllFavorites();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const removeFavorite = (id: string) => {
    const token = utilsCookies.getDataCookie("x-token");
    if (token) {
      favorites.removeFavorite(id, token).then((res) => {
        getSuccess(res.data.msg);
        getAllFavorites();
      });
    }
  };

  const isFavorite = (id: string) => {
    return favoriteCharacters?.find((fav) => fav.id === id) !== undefined;
  };
  useEffect(() => {
    fetchCharacters();
    getAllFavorites();
  }, []);

  return (
    <div className="py-10">
      <div className="w-full h-full flex justify-between items-center py-5 border-b">
        <PaginatedComponent
          nextPage={dataPaginated.nextPage}
          prevPage={dataPaginated.prevPage}
          numPages={dataPaginated.numPages}
          currentPage={dataPaginated.currentPage}
          goNextPage={goNextPage}
          goPrevPage={goPrevPage}
        />
        <Filters cant={data.length} filterByName={filterByName} />
      </div>
      <div className="flex flex-wrap justify-evenly gap-5">
        {data.map((character) => (
          <CardCharacter
            key={character.id}
            id={character.id}
            name={character.name}
            gender={character.gender}
            status={character.status}
            image={character.image}
            location={character.location}
            origin={character.origin}
            checkFavorite={checkFavorite}
            isFavorite={isFavorite}
            removeFavorite={removeFavorite}
          />
        ))}
      </div>
    </div>
  );
};
