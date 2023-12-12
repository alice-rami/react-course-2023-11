import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../../../types/types';
import { BASE_URL } from '../../../constants';
import { RootState } from '../../..';
import { selectUserIds } from '../selectors';

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
      const userIds: string[] = selectUserIds(state);
      return userIds?.length === 0;
    },
  }
);
