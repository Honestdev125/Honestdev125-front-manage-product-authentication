// const { configureStore } = require("@reduxjs/toolkit");
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import reducer from "./slice";
import authReducer from "./authSlice";

export const reducer = combineReducers({
  auth: authReducer,
})

export const stores = configureStore({
  reducer
});