import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../types/types";

const initialState: { data: ICategory[] } = {
  data: [],
};
const CategorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    updateCategories: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { updateCategories } = CategorySlice.actions;
export default CategorySlice.reducer;
