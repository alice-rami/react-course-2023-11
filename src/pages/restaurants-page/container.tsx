import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getRestaurants } from '../../redux/entities/restaurant/thunks/get-restaurants';
import { getUsers } from '../../redux/entities/user/get-users/get-users';
import { RestaurantsPage } from './component';
import { selectRestaurantLoadingStatus } from '../../redux/entities/restaurant/selectors';
import { REQUEST_STATUSES } from '../../constants/request-statuses';

export const RestaurantsPageContainer = () => {
  const dispatch = useAppDispatch();
  const isLoading =
    useAppSelector((state) => selectRestaurantLoadingStatus(state)) ===
    REQUEST_STATUSES.pending;

  useEffect(() => {
    dispatch(getRestaurants());
    dispatch(getUsers());
  }, [dispatch]);

  return <RestaurantsPage isLoading={isLoading} />;
};
