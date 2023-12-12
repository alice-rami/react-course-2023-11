import { createAsyncThunk } from '@reduxjs/toolkit';
import { Restaurant } from '../../../../types/types';
import { BASE_URL } from '../../../constants';
import { RootState } from '../../..';
import { selectRestaurantIds } from '../selectors';

export const getRestaurants = createAsyncThunk<Restaurant[]>(
  'restaurants/getRestaurants',
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${BASE_URL}/restaurants/`);
    const result = await response.json();

    if (!result?.length) {
      rejectWithValue('Empty');
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as RootState;
      const restaurantsIds: string[] = selectRestaurantIds(state);
      return restaurantsIds?.length === 0;
    },
  }
);
