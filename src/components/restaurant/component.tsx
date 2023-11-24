import { Restaurant as RestaurantEntity } from '../../types/types';
import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';

interface RestaurantProps {
  restaurant: RestaurantEntity;
}

export const Restaurant = ({ restaurant }: RestaurantProps) => {
  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;
  return (
    <div>
      <h2>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};
