import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../api/AxiosBaseQuery";

export const ProductsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://d54757447b9c0307.mokky.dev/products",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "",
        method: "get",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = ProductsApi;
