import { createSlice } from "@reduxjs/toolkit";

const getInitialMode = () => {
  const savedMode = localStorage.getItem("mode");
  return savedMode ? savedMode : "light";
};
const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: getInitialMode(),
  },
  reducers: {
    toggleMode: (state) => {
        
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("mode", state.mode);
    },
  },
});
export const { toggleMode } = ThemeSlice.actions;
export default ThemeSlice.reducer;
