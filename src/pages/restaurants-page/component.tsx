import { useState } from 'react';
import { RestaurantPickerContainer } from '../../components/restaurant-picker/container';
import { SyncLoader } from 'react-spinners';
import { loaderCSSProps } from '../../constants/loader-css-props';
import { Outlet } from 'react-router-dom';

interface RestaurantsPageProps {
  isLoading?: boolean;
}

export const RestaurantsPage = ({
  isLoading = false,
}: RestaurantsPageProps) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState<string>('');

  return (
    <div>
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
      {currentRestaurantId && <Outlet />}
    </div>
  );
};
