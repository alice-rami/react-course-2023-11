import { PickerItem } from '../picker-item/component';
import { Dispatch, SetStateAction } from 'react';

interface RestaurantPickerProps {
  names: string[];
  pickRestaurant: Dispatch<SetStateAction<string>>;
}

export const RestaurantPicker = ({
  names,
  pickRestaurant,
}: RestaurantPickerProps) => {
  return (
    <nav>
      {names.map((name) => (
        <PickerItem pickItem={pickRestaurant} name={name} />
      ))}
    </nav>
  );
};
