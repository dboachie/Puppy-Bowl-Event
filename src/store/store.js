import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api.js";

// TODO: configure the store to use the API slice's auto-generated reducer and custom middleware.
const store = configureStore({
  reducer: {
    // Set the reducer for the posts API
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // Add the middleware for the posts API
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
