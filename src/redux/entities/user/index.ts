import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './get-users/get-users';
import { User } from '../../../types/types';
import {
  REQUEST_STATUSES,
  Statuses,
} from '../../../constants/request-statuses';

type UserEntity = Record<string, User>;

interface UserInitialState {
  entities: UserEntity;
  ids: string[];
  status: Statuses;
}

const initialState: UserInitialState = {
  entities: {},
  ids: [],
  status: REQUEST_STATUSES.idle,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.entities = payload.reduce((acc: UserEntity, user: User) => {
          acc[user.id] = user;
          return acc;
        }, {});
        state.ids = Array.from(new Set(payload.map(({ id }: User) => id)));
        state.status = REQUEST_STATUSES.fulfilled;
      }),
});
