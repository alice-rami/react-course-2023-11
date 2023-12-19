import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getDishesByRestaurantId } from './get-dishes/get-dishes';
import { REQUEST_STATUSES } from '../../../constants/request-statuses';
import { Dish } from '../../../types/types';

const entityAdapter = createEntityAdapter<Dish>();

export const dishSlice = createSlice({
  name: 'dish',
  initialState: entityAdapter.getInitialState({
    status: REQUEST_STATUSES.idle,
  }),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getDishesByRestaurantId.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getDishesByRestaurantId.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      })
      .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
        entityAdapter.upsertMany(state, payload);

        state.status = REQUEST_STATUSES.fulfilled;
      }),
});
