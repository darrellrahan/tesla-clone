import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Solar Roof",
    "Solar Panels",
  ],
};

const centerItemSlice = createSlice({
  name: "centerItem",
  initialState,
  reducers: {},
});

export const selectCenterItems = (state) => state.centerItem.items;

export default centerItemSlice.reducer;
