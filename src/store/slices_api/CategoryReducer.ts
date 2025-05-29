import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../api/AxiosBaseQuery";

export const CategoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://d54757447b9c0307.mokky.dev/category",
  }),
  endpoints: (builder) => ({
    //
    getCategories: builder.query({
      query: () => ({
        url: "",
        method: "get",
      }),
    }),
    //
  }),
});

export const { useGetCategoriesQuery } = CategoriesApi;
