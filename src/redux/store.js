import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user";
import AuthReducer from "./auth";
import ProcessReducer from "./process";

export const store = configureStore({
  reducer: {
    UserReducer,
    AuthReducer,
    ProcessReducer,
  },
});
