import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
  restaurantIds: string[];
  status: Statuses;
}

const initialState: DishInitialState = {
  entities: {},
  ids: [],
  restaurantIds: [],
  status: REQUEST_STATUSES.idle,
};

export const dishSlice = createSlice({
  name: 'dish',
  initialState,
  reducers: {
    addMenuRestaurantId: (state, action: PayloadAction<string>) => {
      if (!state.restaurantIds.includes(action.payload)) {
        state.restaurantIds.push(action.payload);
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishesByRestaurantId.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getDishesByRestaurantId.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      })
      .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
        payload.reduce((acc: DishEntity, dish: Dish) => {
          acc[dish.id] = dish;
          return acc;
        }, state.entities);
        payload.map(({ id }: Dish) => {
          state.ids.push(id);
        });
        state.status = REQUEST_STATUSES.fulfilled;
      }),
});

export const dishSliceActions = dishSlice.actions;
