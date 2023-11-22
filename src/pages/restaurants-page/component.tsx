import { RestaurantPicker } from '../../components/restaurant-picker/component';
import { Restaurant } from '../../components/restaurant/component';
import { Restaurant as RestaurantEntity } from '../../types/types';
import { useState } from 'react';

interface RestaurantsPageProps {
  restaurants: RestaurantEntity[];
}

export const RestaurantsPage = ({ restaurants }: RestaurantsPageProps) => {
  const [currentRestaurant, setCurrentRestaurant] = useState<string>('');
  const restaurantNames = restaurants.map(({ name }) => name);
  const activeRestaurant = restaurants.find(
    ({ name }) => name === currentRestaurant
  );
  return (
    <div>
      <RestaurantPicker
        names={restaurantNames}
        pickRestaurant={setCurrentRestaurant}
      />
      {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
    </div>
  );
};
