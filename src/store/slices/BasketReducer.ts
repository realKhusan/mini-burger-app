import { createSlice } from "@reduxjs/toolkit";
import { IBasket } from "../../types/types";

const initialState: { data: IBasket } = {
  data: {} as IBasket,
};
const BasketSlice = createSlice({
  name: "basketApi",
  initialState,
  reducers: {
    updateBasket: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { updateBasket } = BasketSlice.actions;
export default BasketSlice.reducer;
