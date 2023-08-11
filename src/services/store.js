import { articleApi } from "./article";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware),
});