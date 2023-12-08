import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../../constants/normalized-mock';
import { NormalizedRestaurant } from '../../../../types/types';

type NormalizedEntity = {
  [key: string]: NormalizedRestaurant;
};

interface RestaurantsInitialState {
  entities: NormalizedEntity;
  ids: string[];
}

const initialState: RestaurantsInitialState = {
  entities: normalizedRestaurants.reduce(
    (acc, restaurant: NormalizedRestaurant) => {
      acc[restaurant.id] = restaurant;
      return acc;
    },
    {} as NormalizedEntity
  ),
  ids: normalizedRestaurants.map(({ id }: NormalizedRestaurant) => id),
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {},
});
