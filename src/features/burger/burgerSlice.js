import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Solar Roof",
    "Solar Panels",
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
    "Shop",
    "Account",
  ],
};

const burgerItemSlice = createSlice({
  name: "burgerItem",
  initialState,
  reducers: {},
});

export const selectBurgerItems = (state) => state.burgerItem.items;

export default burgerItemSlice.reducer;
