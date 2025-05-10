import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./slices/contactSlice";
import moviesSlice from "./slices/moviesSlice";
const store = configureStore({
  reducer: {
    contact: contactSlice,
    movies: moviesSlice,
  },
});

export default store;
