import { createSlice } from "@reduxjs/toolkit";
import { IBasket, IUser } from "../../types/types";

const getInitialMode = (): string => {
  const savedMode = localStorage.getItem("mode");
  return savedMode ? savedMode : "light";
};
const initialState: { user: IUser; basket: IBasket; mode: string } = {
  mode: getInitialMode(),
  user: {
    id: "",
    userName: "",
    phoneNumber: "",
    password: "",
    adress: "",
    location: [0, 0],
  },
  basket: { id: "", userId: "", products: [] },
};
const MainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("mode", state.mode);
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    updateBasket: (state, action) => {
      state.basket = action.payload;
    },
    addProductBasket: (state, action) => {
      const productInBasket = state.basket.products.find(
        (product) => product.productId === action.payload.productId
      );

      if (productInBasket) {
        productInBasket.quantity += 1;
      } else {
        state.basket.products.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});
export const { toggleMode, updateUser, updateBasket, addProductBasket } =
  MainSlice.actions;
export default MainSlice.reducer;
