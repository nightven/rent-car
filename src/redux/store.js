import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { carsApi } from "./advert/advertSlice";


export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    carsApi.middleware,
  ],
});

setupListeners(store.dispatch);
