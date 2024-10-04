import { configureStore } from "@reduxjs/toolkit";
import { game } from "./appSlice";

const store = configureStore({
  reducer: {
    Game: game,
  },
});

export default store;
