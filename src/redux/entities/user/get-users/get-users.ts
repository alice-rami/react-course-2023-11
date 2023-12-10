import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../../../types/types';
import { BASE_URL } from '../../../constants';
import { RootState } from '../../..';
import { REQUEST_STATUSES } from '../../../../constants/request-statuses';

export const getUsers = createAsyncThunk<User[]>(
  'user/getUsers',
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${BASE_URL}/users/`);
    const result = (await response.json()) as User[];

    if (!result?.length) {
      rejectWithValue('Empty');
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as RootState;
      const notEmpty = state.users.status === REQUEST_STATUSES.fulfilled;
      if (notEmpty) {
        return false;
      }
    },
  }
);
