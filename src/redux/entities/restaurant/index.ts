import { createSlice } from '@reduxjs/toolkit';
import { getRestaurants } from './thunks/get-restaurants';
import { Restaurant } from '../../../types/types';
import {
  REQUEST_STATUSES,
  Statuses,
} from '../../../constants/request-statuses';

type RestaurantEntity = Record<string, Restaurant>;

interface RestaurantsInitialState {
  entities: RestaurantEntity;
  ids: string[];
  status: Statuses;
}

const initialState: RestaurantsInitialState = {
  entities: {},
  ids: [],
  status: REQUEST_STATUSES.idle,
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        state.entities = payload.reduce(
          (acc: RestaurantEntity, restaurant: Restaurant) => {
            acc[restaurant.id] = restaurant;
            return acc;
          },
          {}
        );
        state.ids = payload.map(({ id }: Restaurant) => id);
        state.status = REQUEST_STATUSES.fulfilled;
      }),
});
