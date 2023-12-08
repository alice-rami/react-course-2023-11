import { normalizedUsers } from '../../../../constants/normalized-mock';
import { NormalizedUser } from '../../../../types/types';
import { createSlice } from '@reduxjs/toolkit';

type NormalizedEntity = {
  [key: string]: NormalizedUser;
};

interface UserInitialState {
  entities: NormalizedEntity;
  ids: string[];
}

const initialState: UserInitialState = {
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {} as NormalizedEntity),
  ids: normalizedUsers.map(({ id }: NormalizedUser) => id),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});
