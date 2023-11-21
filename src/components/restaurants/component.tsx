import { Restaurant as RestaurantEntity } from '../../types/types';
import { Restaurant } from '../restaurant/component';

interface RestaurantsProps {
  restaurants: RestaurantEntity[];
}

export const Restaurants = ({ restaurants }: RestaurantsProps) => {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li>
          <Restaurant restaurant={restaurant} />
        </li>
      ))}
    </ul>
  );
};
