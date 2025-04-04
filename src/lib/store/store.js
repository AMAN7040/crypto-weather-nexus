import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/weatherSice";
import coinReducer from "./slices/coinSlice";
import NewsReducer from "./slices/newsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { weather: weatherReducer, coins: coinReducer, news: NewsReducer, },
  });
};
