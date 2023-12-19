import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getUsers } from './get-users/get-users';
import { User } from '../../../types/types';
import { REQUEST_STATUSES } from '../../../constants/request-statuses';

const entityAdapter = createEntityAdapter<User>();

export const userSlice = createSlice({
  name: 'user',
  initialState: entityAdapter.getInitialState({
    status: REQUEST_STATUSES.idle,
  }),
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
        entityAdapter.setAll(state, payload);
        state.status = REQUEST_STATUSES.fulfilled;
      }),
});
