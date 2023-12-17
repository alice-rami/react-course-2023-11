import { Menu } from './component';
import { useGetDishesByRestaurantQuery } from '../../redux/services/api';
import { useParams } from 'react-router-dom';

export const MenuContainer = () => {
  const { restaurantId } = useParams();
  const { data, isLoading } = useGetDishesByRestaurantQuery(restaurantId || '');

  if (!data) {
    return null;
  }

  return <Menu dishes={data} isLoading={isLoading} />;
};
