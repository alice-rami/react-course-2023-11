import { RestaurantPicker } from './component';
import { useGetRestaurantsQuery } from '../../redux/services/api';

export const RestaurantPickerContainer = () => {
  const { data } = useGetRestaurantsQuery();

  if (!data) {
    return null;
  }

  return <RestaurantPicker restaurants={data} />;
};
