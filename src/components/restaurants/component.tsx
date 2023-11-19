import { TRestaurant } from '../../types/types';
import { Restaurant } from '../restaurant/component';

interface RestaurantsProps {
  restaurants: TRestaurant[];
}

export const Restaurants = ({ restaurants }: RestaurantsProps) => {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}
    </ul>
  );
};
