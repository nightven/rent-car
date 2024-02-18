import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const BASE_URL = "https://65cc1402dd519126b83e0478.mockapi.io/api/v1";
const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: BASE_URL + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const carsApi = createApi({
  reducerPath: "cars",
  baseQuery: axiosBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Cars"],
  endpoints(builder) {
    return {
      getCars: builder.query({
        query: (params) => ({
          url: `/adverts`,  
          method: "get",
          params
        }),
        keepUnusedDataFor: false,
      }),
    };
  },
});

export const { useGetCarsQuery } = carsApi;
