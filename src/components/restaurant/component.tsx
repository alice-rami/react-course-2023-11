import { TRestaurant } from '../../types/types';
import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';

interface RestaurantProps {
  restaurant: TRestaurant;
}

export const Restaurant = ({ restaurant }: RestaurantProps) => {
  return (
    <li>
      <h2>{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </li>
  );
};
