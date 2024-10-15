import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT_CODE = "2407-ftb-et-web-pt";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_CODE}/`;

// TODO: configure createApi to use API_URL as the base URL
// TODO: add "Puppy" as a tag type.

export const api = createApi({
  // Define the reducer path for the API
  reducerPath: "puppiesApi",
  baseQuery: fetchBaseQuery({
    // Set the base URL for API requests
    baseUrl: API_URL,
    prepareHeaders(headers) {
      // Set the Content-type header to application/json
      headers.set("Content-type", "application/json");
      // Send authorization token for subsequent requests
      //   if (token) {
      //     headers.set("authorization", `Bearer ${token}`);
      //   }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Define the endpoints for the API
    getPuppies: builder.query({
      // Specify the query function for getting puppies
      query: () => "/players",
      // "tags" for cache invalidation
      providesTags: ["Puppies"],
    }),

    // Delete Puppy Mutation
    deletePuppy: builder.mutation({
      query: ({ id }) => ({
        url: `/players/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Puppies"],
    }),
  }),
});

// Destructure the necessary hooks from the API
export const { useGetPuppiesQuery, useDeletePuppyMutation } = api;
