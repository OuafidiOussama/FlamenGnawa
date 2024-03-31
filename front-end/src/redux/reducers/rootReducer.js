import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import catReducer from "../slices/catSlice";
import shopReducer from "../slices/ShopSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  categories: catReducer,
  shop: shopReducer
});
