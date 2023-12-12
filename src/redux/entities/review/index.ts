import { createSlice } from '@reduxjs/toolkit';
import { getReviewsByRestaurantId } from './get-reviews/get-reviews';
import { Review } from '../../../types/types';
import {
  REQUEST_STATUSES,
  Statuses,
} from '../../../constants/request-statuses';

type ReviewEntity = Record<string, Review>;

interface ReviewInitialState {
  entities: ReviewEntity;
  ids: string[];
  status: Statuses;
}

const initialState: ReviewInitialState = {
  entities: {},
  ids: [],
  status: REQUEST_STATUSES.idle,
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
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
        state.entities = payload.reduce((acc: ReviewEntity, review: Review) => {
          if (!acc[review.id]) {
            acc[review.id] = review;
          }
          return acc;
        }, state.entities);
        state.ids = Array.from(
          new Set([...state.ids, ...payload.map(({ id }: Review) => id)])
        );
        state.status = REQUEST_STATUSES.fulfilled;
      }),
});
