import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    "Existing Inventory",
    "Used Inventory",
    "Trade-In",
    "Test Drive",
    "Insurance",
    "Cybertruck",
    "Roadster",
    "Semi",
    "Charging",
    "Powerwall",
    "Commercial Energy",
    "Utilities",
    "Find Us",
    "Support",
    "Investor Relations",
  ],
};

const burgerItemSlice = createSlice({
  name: "burgerItem",
  initialState,
  reducers: {},
});

export const selectBurgerItems = (state) => state.burgerItem.items;

export default burgerItemSlice.reducer;
