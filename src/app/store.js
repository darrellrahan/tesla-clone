import { configureStore } from "@reduxjs/toolkit";
import centerItemReducer from "../features/centerHeader/centerHeaderSlice";
import rightItemReducer from "../features/rightHeader/rightHeaderSlice";
import burgerItemReducer from "../features/burger/burgerSlice";

export const store = configureStore({
  reducer: {
    centerItem: centerItemReducer,
    rightItem: rightItemReducer,
    burgerItem: burgerItemReducer,
  },
});
