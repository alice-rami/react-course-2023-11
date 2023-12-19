import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getRestaurants } from './thunks/get-restaurants';
import { Restaurant } from '../../../types/types';
import {
  REQUEST_STATUSES,
} from '../../../constants/request-statuses';

const entityAdapter = createEntityAdapter<Restaurant>();

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: entityAdapter.getInitialState({status: REQUEST_STATUSES.idle}),
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
        entityAdapter.setAll(state, payload);
        state.status = REQUEST_STATUSES.fulfilled;
      }),
});
