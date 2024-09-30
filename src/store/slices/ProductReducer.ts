import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/types";

const initialState: { data: IProduct[] } = {
  data: [],
};
const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProducts: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { updateProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
