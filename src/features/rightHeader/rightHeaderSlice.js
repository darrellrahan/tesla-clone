import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: ["Shop", "Account"],
};

const rightItemSlice = createSlice({
  name: "rightItem",
  initialState,
  reducers: {},
});

export const selectRightItems = (state) => state.rightItem.items;

export default rightItemSlice.reducer;
