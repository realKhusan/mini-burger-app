import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./slices/ThemeReducer";
import ProductReducer from "./slices/ProductReducer";
import CategoriesReducer from "./slices/Categories";

const store = configureStore({
  reducer: {
    products: ProductReducer,
    categories: CategoriesReducer,
    theme: ThemeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
