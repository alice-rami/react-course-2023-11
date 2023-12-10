import { RootState } from '../..';

export const selectDishModule = (state: RootState) => state.dishes;
export const selectDishIds = (state: RootState) => selectDishModule(state).ids;
export const selectDishById = (state: RootState, id: string) =>
  selectDishModule(state).entities[id];
export const selectDishRestaurantIds = (state: RootState) =>
  state.dishes.restaurantIds;
