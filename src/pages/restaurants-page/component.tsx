import { RestaurantPicker } from '../../components/restaurant-picker/component';
import { Restaurants } from '../../components/restaurants/component';
import { TRestaurant } from '../../types/types';

interface RestaurantsPageProps {
  restaurants: TRestaurant[];
}

export const RestaurantsPage = ({ restaurants }: RestaurantsPageProps) => {
  const restaurantNames = restaurants.map(({ name }) => name);
  return (
    <div>
      <RestaurantPicker names={restaurantNames} />
      <Restaurants restaurants={restaurants} />
    </div>
  );
};
