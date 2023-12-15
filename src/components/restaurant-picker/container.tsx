import { SetStateAction, Dispatch } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { RestaurantPicker } from './component';
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors';

interface RestaurantPickerContainerProps {
  pickRestaurant: Dispatch<SetStateAction<string>>;
}

export const RestaurantPickerContainer = ({
  pickRestaurant,
}: RestaurantPickerContainerProps) => {
  const restaurantIds = useAppSelector((state) => selectRestaurantIds(state));
  return (
    <RestaurantPicker
      pickRestaurant={pickRestaurant}
      restaurantIds={restaurantIds}
    />
  );
};
