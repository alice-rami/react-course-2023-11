import { Layout } from '../../components/layout/component';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { RestaurantPickerContainer } from '../../components/restaurant-picker/container';
import { RestaurantContainer } from '../../components/restaurant/container';
import { getRestaurants } from '../../redux/entities/restaurant/thunks/get-restaurants';
import { getUsers } from '../../redux/entities/user/get-users/get-users';

export const RestaurantsPage = () => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
    dispatch(getUsers());
  }, [dispatch]);

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
