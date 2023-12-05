import { RootState } from '../../../../redux';
import { createSelector } from '@reduxjs/toolkit/react';

export const selectRestaurantModule = (state: RootState) => state.restaurants;

export const selectRestaurantIds = (state: RootState) =>
  selectRestaurantModule(state).ids;

export const selectRestaurantsByIds = (state: RootState) =>
  selectRestaurantModule(state).entities;

export const selectRestaurantById = (state: RootState, id: string) =>
  selectRestaurantModule(state).entities[id];

export const selectRestaurantIdsAndNames = createSelector(
  [selectRestaurantIds, selectRestaurantsByIds],
  (restaurantIds, restaurantsByIds) => {
    return restaurantIds.map((restaurantId) => {
      return [restaurantId, restaurantsByIds[restaurantId].name];
    });
  }
);
