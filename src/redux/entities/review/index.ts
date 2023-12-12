import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getReviewsByRestaurantId } from './get-reviews/get-reviews';
import { Review } from '../../../types/types';
import { REQUEST_STATUSES } from '../../../constants/request-statuses';

const entityAdapter = createEntityAdapter<Review>();

export const reviewSlice = createSlice({
  name: 'review',
  initialState: entityAdapter.getInitialState({
    status: REQUEST_STATUSES.idle,
  }),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getReviewsByRestaurantId.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getReviewsByRestaurantId.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      })
      .addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
        entityAdapter.upsertMany(state, payload);
        state.status = REQUEST_STATUSES.fulfilled;
      }),
});
