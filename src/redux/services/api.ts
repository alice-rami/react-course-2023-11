import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
import { Dish, Restaurant, Review, ReviewData, User } from '../../types/types';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Review'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => ({
        url: 'restaurants',
      }),
    }),
    getRestaurantById: builder.query<Restaurant, string>({
      query: (restaurantId) => ({
        url: `restaurant/${restaurantId}`,
      }),
    }),
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: 'users',
      }),
    }),
    getDishesByRestaurant: builder.query<Dish[], string>({
      query: (restaurantId) => ({
        url: 'dishes',
        params: { restaurantId },
      }),
    }),
    getReviewsByRestaurant: builder.query<Review[], string>({
      query: (restaurantId) => ({
        url: 'reviews',
        params: { restaurantId },
      }),
      providesTags: (result, _, restaurantId) =>
        (
          result?.map(({ id }) => ({ type: 'Review', id } as const)) || []
        ).concat(
          { type: 'Review', id: restaurantId },
          { type: 'Review', id: restaurantId }
        ),
    }),
    createReviewByRestaurant: builder.mutation<
      Review,
      { restaurantId: string; newReview: ReviewData }
    >({
      query: ({ restaurantId, newReview }) => ({
        url: `review/${restaurantId}`,
        method: 'POST',
        body: newReview,
      }),
      invalidatesTags: (result, _, { restaurantId }) => [
        { type: 'Review', id: restaurantId },
      ],
    }),
    editReviewByRestaurant: builder.mutation<
      Review,
      { reviewId: string; restaurantId: string; editedReview: ReviewData }
    >({
      query: ({ reviewId, editedReview }) => ({
        url: `review/${reviewId}`,
        method: 'PATCH',
        body: editedReview,
      }),
      invalidatesTags: (result, _, { restaurantId }) => [
        { type: 'Review', id: restaurantId },
      ],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetDishesByRestaurantQuery,
  useGetReviewsByRestaurantQuery,
  useGetUsersQuery,
  useCreateReviewByRestaurantMutation,
  useEditReviewByRestaurantMutation,
} = api;
