import { TRestaurantName } from '../../types/types';

interface RestaurantPickerItemProps {
  name: TRestaurantName;
}

export const RestaurantPickerItem = ({ name }: RestaurantPickerItemProps) => {
  return <button>{name}</button>;
};
