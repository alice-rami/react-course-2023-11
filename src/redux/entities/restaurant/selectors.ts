import { RootState } from '../../../redux';

export const selectRestaurantModule = (state: RootState) => state.restaurants;

export const selectRestaurantIds = (state: RootState) =>
  selectRestaurantModule(state).ids;

export const selectRestaurantsByIds = (state: RootState) =>
  selectRestaurantModule(state).entities;

export const selectRestaurantById = (state: RootState, id: string) =>
  selectRestaurantModule(state).entities[id];
