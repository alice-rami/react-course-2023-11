import { Layout } from '../../components/layout/component';
import { useState } from 'react';
import { RestaurantPickerContainer } from '../../components/restaurant-picker/container';
import { RestaurantContainer } from '../../components/restaurant/container';
import { SyncLoader } from 'react-spinners';
import { loaderCSSProps } from '../../constants/loader-css-props';

interface RestaurantsPageProps {
  isLoading?: boolean;
}

export const RestaurantsPage = ({
  isLoading = false,
}: RestaurantsPageProps) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState<string>('');

  return (
    <div>
      <Layout>
        <SyncLoader
          color='#ff8c00'
          size={10}
          speedMultiplier={1}
          loading={isLoading}
          cssOverride={loaderCSSProps}
        />
        {!isLoading && (
          <RestaurantPickerContainer pickRestaurant={setCurrentRestaurantId} />
        )}
        {currentRestaurantId && (
          <RestaurantContainer restaurantId={currentRestaurantId} />
        )}
      </Layout>
    </div>
  );
};
