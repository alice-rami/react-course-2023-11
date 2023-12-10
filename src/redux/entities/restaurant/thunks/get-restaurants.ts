import { createAsyncThunk } from '@reduxjs/toolkit';
import { Restaurant } from '../../../../types/types';
import { BASE_URL } from '../../../constants';
import { REQUEST_STATUSES } from '../../../../constants/request-statuses';
import { RootState } from '../../..';

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
      const notEmpty = state.restaurants.status === REQUEST_STATUSES.fulfilled;
      if (notEmpty) {
        return false;
      }
    },
  }
);
