import { Layout } from '../../components/layout/component';
import { RestaurantPicker } from '../../components/restaurant-picker/component';
import { Restaurant } from '../../components/restaurant/component';
import { Restaurant as RestaurantEntity } from '../../types/types';
import { useState } from 'react';

interface RestaurantsPageProps {
  restaurants: RestaurantEntity[];
}

export const RestaurantsPage = ({ restaurants }: RestaurantsPageProps) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState<string>('');
  const restaurantNamesIds = restaurants.map(({ name, id }) => ({ name, id }));
  const currentRestaurant = restaurants.find(
    ({ id }) => id === currentRestaurantId
  );
  return (
    <div>
      <Layout>
        <RestaurantPicker
          restaurants={restaurantNamesIds}
          pickRestaurant={setCurrentRestaurantId}
        />
        {currentRestaurant && <Restaurant restaurant={currentRestaurant} />}
      </Layout>
    </div>
  );
};
