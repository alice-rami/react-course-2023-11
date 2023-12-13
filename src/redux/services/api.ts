import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
import { Dish, Restaurant, Review, User } from '../../types/types';

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
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetDishesByRestaurantQuery,
  useGetReviewsByRestaurantQuery,
  useGetUsersQuery,
} = api;
