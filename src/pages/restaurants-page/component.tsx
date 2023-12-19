import { RestaurantPickerContainer } from '../../components/restaurant-picker/container';
import { Outlet } from 'react-router-dom';

export const RestaurantsPage = () => {
  return (
    <div>
      <RestaurantPickerContainer />
      <Outlet />
    </div>
  );
};
