import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../servicesRedux/cryptoApi";
import { cryptoNewsApi } from "../servicesRedux/cryptoNewsApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cryptoApi.middleware,
      cryptoNewsApi.middleware
    ),
});
