import { Restaurant as RestaurantEntity } from '../../types/types';
import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';

interface RestaurantProps {
  restaurant: RestaurantEntity;
}

export const Restaurant = ({ restaurant }: RestaurantProps) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
