import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
  restaurantIds: string[];
}

const initialState: ReviewInitialState = {
  entities: {},
  ids: [],
  status: REQUEST_STATUSES.idle,
  restaurantIds: [],
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    addReviewsRestaurantId: (state, action: PayloadAction<string>) => {
      if (!state.restaurantIds.includes(action.payload)) {
        state.restaurantIds.push(action.payload);
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviewsByRestaurantId.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getReviewsByRestaurantId.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      })
      .addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
        payload.reduce((acc: ReviewEntity, review: Review) => {
          if (!acc[review.id]) {
            acc[review.id] = review;
          }
          return acc;
        }, state.entities);
        payload.map(({ id }: Review) => {
          if (!state.ids.includes(id)) {
            state.ids.push(id);
          }
        });
        state.status = REQUEST_STATUSES.fulfilled;
      }),
});

export const reviewSliceActions = reviewSlice.actions;
