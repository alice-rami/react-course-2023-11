import { RootState } from '../..';

export const selectReviewModule = (state: RootState) => state.reviews;
export const selectReviewIds = (state: RootState) =>
  selectReviewModule(state).ids;
export const selectReviewById = (state: RootState, id: string) =>
  selectReviewModule(state).entities[id];
