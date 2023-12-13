import { Restaurant } from './component';
import { useGetRestaurantByIdQuery } from '../../redux/services/api';

interface RestaurantContainerProps {
  restaurantId: string;
}

export const RestaurantContainer = ({
  restaurantId,
}: RestaurantContainerProps) => {
  const { data } = useGetRestaurantByIdQuery(restaurantId);

  if (!data) {
    return null;
  }
  return <Restaurant restaurant={data} />;
};
