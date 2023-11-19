import { TRestaurantName } from '../../types/types';
import { RestaurantPickerItem } from '../restaurant-picker-item/component';

interface RestaurantPickerProps {
  names: TRestaurantName[];
}

export const RestaurantPicker = ({ names }: RestaurantPickerProps) => {
  return (
    <nav>
      {names.map((name) => (
        <RestaurantPickerItem name={name} />
      ))}
    </nav>
  );
};
