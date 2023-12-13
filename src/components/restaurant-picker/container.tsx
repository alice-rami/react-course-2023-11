import { SetStateAction, Dispatch } from 'react';
import { RestaurantPicker } from './component';
import { useGetRestaurantsQuery } from '../../redux/services/api';

interface RestaurantPickerContainerProps {
  pickRestaurant: Dispatch<SetStateAction<string>>;
}

export const RestaurantPickerContainer = ({
  pickRestaurant,
}: RestaurantPickerContainerProps) => {
  const { data } = useGetRestaurantsQuery();

  if (!data) {
    return null;
  }

  return (
    <RestaurantPicker pickRestaurant={pickRestaurant} restaurants={data} />
  );
};
