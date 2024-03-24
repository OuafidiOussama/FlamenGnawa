import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
});
