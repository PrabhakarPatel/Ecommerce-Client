import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import axios from "axios";
import {
  AllUserResponse,
  DeleteUserRequest,
  MessageResponse,
  UserResponse,
} from "../../types/api-types";
import { User } from "../../types/type";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/user/`,
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    login: builder.mutation<MessageResponse, User>({
      query: (user) => ({
        url: "new",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation<MessageResponse, DeleteUserRequest>({
      query: ({ userId, adminUserId }) => ({
        url: `${userId}?id=${adminUserId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
    allUsers: builder.query<AllUserResponse, string>({
      query: (id) => `all?id=${id}`,
      providesTags: ["user"],
    }),
  }),
});

export const getUser = async (id: string) => {
  try {
    const { data }: { data: UserResponse } = await axios.get(
      `${import.meta.env.VITE_SERVER}/api/v1/user/${id}`
    );

    return data;
  } catch (error) {
    throw error;
  }
};

export const { useLoginMutation, useDeleteUserMutation, useAllUsersQuery } =
  userApi;
