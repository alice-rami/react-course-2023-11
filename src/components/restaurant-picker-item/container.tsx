import { Restaurant } from '../../types/types';
import { PickerItem } from '../picker-item/component';

interface RestaurantPickerItemContainerProps {
  restaurant: Restaurant;
  pickItem: () => void;
}
export const RestaurantPickerItemContainer = ({
  restaurant,
  pickItem,
}: RestaurantPickerItemContainerProps) => {
  const { name } = restaurant;
  return <PickerItem pickItem={pickItem} value={name} />;
};
