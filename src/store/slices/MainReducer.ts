import { createSlice } from "@reduxjs/toolkit";
import { IBasket, IUser } from "../../types/types";

const getInitialMode = () => {
  const savedMode = localStorage.getItem("mode");
  return savedMode ? savedMode : "light";
};
const initialState: { user: IUser; basket: IBasket; mode: string } = {
  mode: getInitialMode(),
  user: {} as IUser,
  basket: {} as IBasket,
};
const MainSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("mode", state.mode);
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { toggleMode, updateUser } = MainSlice.actions;
export default MainSlice.reducer;
