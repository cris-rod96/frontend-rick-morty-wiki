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
import { AxiosError } from "axios";

export const useHome = () => {
  const [data, setData] = React.useState<CharacterType[]>([]);
  const { setDataPaginated, dataPaginated } = usePagination();
  const dispatch = Redux.useDispatch();
  const { getSuccess, getError } = useToast();
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
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response?.data.errors) {
            return getError(error.response.data.errors[0].msg);
          }

          getError(error.response?.data.msg);
        }
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
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response?.data.errors) {
            return getError(error.response.data.errors[0].msg);
          }

          getError(error.response?.data.msg);
        }
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
          if (error instanceof AxiosError) {
            if (error.response?.data.errors) {
              return getError(error.response.data.errors[0].msg);
            }

            getError(error.response?.data.msg);
          }
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
        .catch((error) => {
          if (error instanceof AxiosError) {
            if (error.response?.data.errors) {
              return getError(error.response.data.errors[0].msg);
            }

            getError(error.response?.data.msg);
          }
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
