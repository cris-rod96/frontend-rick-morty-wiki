import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CharacterType } from "../../types/index.types";

export interface FavoriteState {
  favorites: CharacterType[];
}

const initialState: FavoriteState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    getFavorites: (state, action: PayloadAction<CharacterType[]>) => {
      state.favorites = action.payload;
    },
    addFavorite: (state, action: PayloadAction<CharacterType>) => {
      state.favorites = [...state.favorites, action.payload];
    },
  },
});

export const { addFavorite, getFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
