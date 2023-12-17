import { Restaurant } from './component';
import { useGetRestaurantByIdQuery } from '../../redux/services/api';
import { useParams } from 'react-router-dom';

export const RestaurantContainer = () => {
  const { restaurantId } = useParams();
  const { data } = useGetRestaurantByIdQuery(restaurantId || '');

  if (!data) {
    return null;
  }
  return <Restaurant restaurant={data} />;
};
