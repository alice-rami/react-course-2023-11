import { normalizedDishes } from '../../../../constants/normalized-mock';
import { Dish } from '../../../../types/types';
import { createSlice } from '@reduxjs/toolkit';

type NormalizedEntity = {
  [key: string]: Dish;
};

interface DishInitialState {
  entities: NormalizedEntity;
  ids: string[];
}

const initialState: DishInitialState = {
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;
    return acc;
  }, {} as NormalizedEntity),
  ids: normalizedDishes.map(({ id }: Dish) => id),
};

export const dishSlice = createSlice({
  name: 'dish',
  initialState,
  reducers: {},
});
