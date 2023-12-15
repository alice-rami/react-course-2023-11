import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../..';
import { BASE_URL } from '../../../constants';
import { selectReviewIds } from '../selectors';
import { selectRestaurantById } from '../../restaurant/selectors';

export const getReviewsByRestaurantId = createAsyncThunk(
  'dish/getReviewsByRestaurantId',
  async (restaurantId: string, { rejectWithValue }) => {
    const response = await fetch(
      `${BASE_URL}/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    if (!result?.length) {
      rejectWithValue('Empty!');
    }
    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState() as RootState;
      const reviewIds: string[] = selectReviewIds(state);
      const restaurantReviewIds: string[] = selectRestaurantById(
        state,
        restaurantId
      )?.reviews;
      return !restaurantReviewIds.every((id) => reviewIds.includes(id));
    },
  }
);
