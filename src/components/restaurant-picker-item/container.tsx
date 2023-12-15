import { useAppSelector } from '../../hooks/hooks';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';
import { PickerItem } from '../picker-item/component';

interface RestaurantPickerItemContainerProps {
  restaurantId: string;
  pickItem: () => void;
}
export const RestaurantPickerItemContainer = ({
  restaurantId,
  pickItem,
}: RestaurantPickerItemContainerProps) => {
  const restaurant = useAppSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  return <PickerItem pickItem={pickItem} value={restaurant.name} />;
};
