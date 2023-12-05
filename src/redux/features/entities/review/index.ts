import { normalizedReviews } from '../../../../constants/normalized-mock';
import { NormalizedReview } from '../../../../types/types';
import { createSlice } from '@reduxjs/toolkit';

type NormalizedEntity = {
  [key: string]: NormalizedReview;
};

interface ReviewInitialState {
  entities: NormalizedEntity;
  ids: string[];
}

const initialState: ReviewInitialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {} as NormalizedEntity),
  ids: normalizedReviews.map(({ id }: NormalizedReview) => id),
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
});
