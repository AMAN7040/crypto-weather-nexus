import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/weatherSice";
import coinReducer from "./slices/coinSlice";
import NewsReducer from "./slices/newsSlice";
import notificationsReducer from "./slices/notificationSlice";
import favouriteReducer from "./slices/favouriteSice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      weather: weatherReducer,
      coins: coinReducer,
      news: NewsReducer,
      notifications: notificationsReducer,
      favorites: favouriteReducer,
    },
  });
};
