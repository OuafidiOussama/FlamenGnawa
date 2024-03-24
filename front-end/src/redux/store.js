import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
