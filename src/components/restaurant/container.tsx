import { Restaurant } from './component';
import { useAppSelector } from '../../hooks/hooks';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';

interface RestaurantContainerProps {
  restaurantId: string;
}

export const RestaurantContainer = ({
  restaurantId,
}: RestaurantContainerProps) => {
  const restaurant = useAppSelector((store) =>
    selectRestaurantById(store, restaurantId)
  );
  return <Restaurant restaurant={restaurant} />;
};
