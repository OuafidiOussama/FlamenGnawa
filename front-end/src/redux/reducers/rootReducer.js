import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import shopReducer from "../slices/ShopSlice";
import catReducer from "../slices/catSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  categories: catReducer,
  shop: shopReducer,
});
