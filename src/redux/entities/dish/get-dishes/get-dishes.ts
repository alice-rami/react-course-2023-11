import { createAsyncThunk } from '@reduxjs/toolkit';
import { dishSliceActions } from '..';
import { BASE_URL } from '../../../constants';
import { RootState } from '../../..';

export const getDishesByRestaurantId = createAsyncThunk(
  'dish/getDishesByRestaurantId',
  async (restaurantId: string, { rejectWithValue, dispatch }) => {
    const response = await fetch(
      `${BASE_URL}/dishes?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    if (!result?.length) {
      rejectWithValue('Empty!');
    }
    dispatch(dishSliceActions.addMenuRestaurantId(restaurantId));
    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const { dishes } = getState() as RootState;
      const hasRestaurantId = dishes.restaurantIds.includes(restaurantId);
      if (hasRestaurantId) {
        return false;
      }
    },
  }
);
