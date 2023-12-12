import { Layout } from '../../components/layout/component';
import { useState } from 'react';
import { RestaurantPickerContainer } from '../../components/restaurant-picker/container';
import { RestaurantContainer } from '../../components/restaurant/container';

export const RestaurantsPage = () => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState<string>('');

  return (
    <div>
      <Layout>
        <RestaurantPickerContainer pickRestaurant={setCurrentRestaurantId} />
        {currentRestaurantId && (
          <RestaurantContainer restaurantId={currentRestaurantId} />
        )}
      </Layout>
    </div>
  );
};
