import { createSlice } from '@reduxjs/toolkit';
import { getDishesByRestaurantId } from './get-dishes/get-dishes';
import {
  REQUEST_STATUSES,
  Statuses,
} from '../../../constants/request-statuses';
import { Dish } from '../../../types/types';

type DishEntity = Record<string, Dish>;

interface DishInitialState {
  entities: DishEntity;
  ids: string[];
  status: Statuses;
}

const initialState: DishInitialState = {
  entities: {},
  ids: [],
  status: REQUEST_STATUSES.idle,
};

export const dishSlice = createSlice({
  name: 'dish',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getDishesByRestaurantId.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getDishesByRestaurantId.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      })
      .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
        state.entities = payload.reduce((acc: DishEntity, dish: Dish) => {
          acc[dish.id] = dish;
          return acc;
        }, state.entities);

        state.ids = Array.from(
          new Set([...state.ids, ...payload.map(({ id }: Dish) => id)])
        );

        state.status = REQUEST_STATUSES.fulfilled;
      }),
});
