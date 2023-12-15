import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../constants';
import { RootState } from '../../..';
import { selectDishIds } from '../selectors';
import { selectRestaurantById } from '../../restaurant/selectors';

export const getDishesByRestaurantId = createAsyncThunk(
  'dish/getDishesByRestaurantId',
  async (restaurantId: string, { rejectWithValue }) => {
    const response = await fetch(
      `${BASE_URL}/dishes?restaurantId=${restaurantId}`
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
      const dishIds: string[] = selectDishIds(state);
      const restaurantDishIds: string[] = selectRestaurantById(
        state,
        restaurantId
      )?.menu;
      return !restaurantDishIds.every((id) => dishIds.includes(id));
    },
  }
);
