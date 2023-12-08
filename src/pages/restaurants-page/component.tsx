import { Layout } from '../../components/layout/component';
import { RestaurantPicker } from '../../components/restaurant-picker/component';
import { Restaurant } from '../../components/restaurant/component';
import { useState } from 'react';

export const RestaurantsPage = () => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState<string>('');

  return (
    <div>
      <Layout>
        <RestaurantPicker pickRestaurant={setCurrentRestaurantId} />
        {currentRestaurantId && (
          <Restaurant restaurantId={currentRestaurantId} />
        )}
      </Layout>
    </div>
  );
};
