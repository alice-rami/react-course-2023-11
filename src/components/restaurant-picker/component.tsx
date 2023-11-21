import { PickerItem } from '../picker-item/component';

interface RestaurantPickerProps {
  names: string[];
}

export const RestaurantPicker = ({ names }: RestaurantPickerProps) => {
  return (
    <nav>
      {names.map((name) => (
        <PickerItem>{name}</PickerItem>
      ))}
    </nav>
  );
};
