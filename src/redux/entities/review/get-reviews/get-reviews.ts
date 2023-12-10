import { createAsyncThunk } from '@reduxjs/toolkit';
import { reviewSliceActions } from '..';
import { RootState } from '../../..';
import { BASE_URL } from '../../../constants';

export const getReviewsByRestaurantId = createAsyncThunk(
  'dish/getReviewsByRestaurantId',
  async (restaurantId: string, { rejectWithValue, dispatch }) => {
    const response = await fetch(
      `${BASE_URL}/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    if (!result?.length) {
      rejectWithValue('Empty!');
    }
    dispatch(reviewSliceActions.addReviewsRestaurantId(restaurantId));
    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const { reviews } = getState() as RootState;
      const hasRestaurantId = reviews.restaurantIds.includes(restaurantId);
      if (hasRestaurantId) {
        return false;
      }
    },
  }
);
