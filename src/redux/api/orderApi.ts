import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  MessageResponse,
  NewOrderRequest,
  OrderDetailsResponse,
  UpdateOrderRequest,
  allOrdersResponse,
} from "../../types/api-types";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/order/`,
  }),
  tagTypes: ["orders"],
  endpoints: (builder) => ({
    newOrder: builder.mutation<MessageResponse, NewOrderRequest>({
      query: (order) => ({
        url: "new",
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["orders"],
    }),
    myOrders: builder.query<allOrdersResponse, string>({
      query: (id) => `my?id=${id}`,
      providesTags: ["orders"],
    }),
    allOrders: builder.query<allOrdersResponse, string>({
      query: (id) => `all?id=${id}`,
      providesTags: ["orders"],
    }),
    OrderDetails: builder.query<OrderDetailsResponse, string>({
      query: (id) => id,
      providesTags: ["orders"],
    }),
    updateOrder: builder.mutation<MessageResponse, UpdateOrderRequest>({
      query: ({ userId, orderId }) => ({
        url: `${orderId}?id=${userId}`,
        method: "PUT",
      }),
      invalidatesTags: ["orders"],
    }),
    deleteOrder: builder.mutation<MessageResponse, UpdateOrderRequest>({
      query: ({ userId, orderId }) => ({
        url: `${orderId}?id=${userId}`,
        method: "Delete",
      }),
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  useNewOrderMutation,
  useMyOrdersQuery,
  useAllOrdersQuery,
  useOrderDetailsQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = orderApi;
