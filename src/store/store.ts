import { configureStore } from "@reduxjs/toolkit";
import MainReducer from "./slices/MainReducer";
import ProductReducer from "./slices/ProductReducer";
import CategoriesReducer from "./slices/Categories";

const store = configureStore({
  reducer: {
    products: ProductReducer,
    categories: CategoriesReducer,
    main: MainReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
