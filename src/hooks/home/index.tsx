import React, { ChangeEvent } from "react";
import { CharacterType } from "../../types/index.types";
import { characters } from "../../api/characters";
import { usePagination } from "..";
import { utilsCookies } from "../../utils";
import { favorites } from "../../api/favorites";
import { useToast } from "../../context/toast.context";
import { getFavorites } from "../../redux/slices/favoriteSlice";
import { RootState } from "../../redux/store";
import * as Redux from "react-redux";

export const useHome = () => {
  const [data, setData] = React.useState<CharacterType[]>([]);
  const { setDataPaginated, dataPaginated } = usePagination();
  const dispatch = Redux.useDispatch();
  const { getSuccess } = useToast();
  const favoriteCharacters = Redux.useSelector(
    (state: RootState) => state.favorites.favorites
  );

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

  //   Filtros
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

  return {
    data,
    setData,
    fetchCharacters,
    setDataPaginated,
    dataPaginated,
    goNextPage,
    goPrevPage,
    filterByName,
    checkFavorite,
    removeFavorite,
    getAllFavorites,
    isFavorite,
  };
};
