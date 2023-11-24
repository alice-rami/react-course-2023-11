import { PickerItem } from '../picker-item/component';
import { Dispatch, SetStateAction } from 'react';

interface RestaurantPickerProps {
  restaurants: { name: string; id: string }[];
  pickRestaurant: Dispatch<SetStateAction<string>>;
}

export const RestaurantPicker = ({
  restaurants,
  pickRestaurant,
}: RestaurantPickerProps) => {
  return (
    <nav>
      {restaurants.map(({ name, id }) => (
        <PickerItem pickItem={() => pickRestaurant(id)} value={name} />
      ))}
    </nav>
  );
};
