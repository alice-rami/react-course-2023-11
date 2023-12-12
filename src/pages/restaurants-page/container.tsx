import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getRestaurants } from '../../redux/entities/restaurant/thunks/get-restaurants';
import { getUsers } from '../../redux/entities/user/get-users/get-users';
import { RestaurantsPage } from './component';
import { selectRestaurantLoadingStatus } from '../../redux/entities/restaurant/selectors';

export const RestaurantsPageContainer = () => {
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector((state) =>
    selectRestaurantLoadingStatus(state)
  );

  useEffect(() => {
    dispatch(getRestaurants());
    dispatch(getUsers());
  }, [dispatch]);

  if (loadingStatus === 'pending') {
    return <p>Loading...</p>;
  }

  return <RestaurantsPage />;
};
