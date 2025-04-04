// store/features/favoritesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const MAX_FAVORITES = 3;

const initialState = {
  cryptos: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleCryptoFavorite: (state, action) => {
      const id = action.payload;
      const index = state.cryptos.indexOf(id);

      if (index === -1) {
        if (state.cryptos.length >= MAX_FAVORITES) {
          state.cryptos.shift();
        }
        state.cryptos.push(id);
      } else {
        state.cryptos.splice(index, 1);
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("favoriteCryptos", JSON.stringify(state.cryptos));
      }
    },

    loadFavoritesFromStorage: (state) => {
      if (typeof window !== "undefined") {
        const stored = JSON.parse(
          localStorage.getItem("favoriteCryptos") || "[]"
        );
        state.cryptos = stored.slice(0, MAX_FAVORITES);
      }
    },
  },
});

export const { toggleCryptoFavorite, loadFavoritesFromStorage } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
