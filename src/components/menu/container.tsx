import { Menu } from './component';
import { useGetDishesByRestaurantQuery } from '../../redux/services/api';

interface MenuContainerProps {
  restaurantId: string;
}

export const MenuContainer = ({ restaurantId }: MenuContainerProps) => {
  const { data, isLoading } = useGetDishesByRestaurantQuery(restaurantId);

  if (!data) {
    return null;
  }

  return <Menu dishes={data} isLoading={isLoading} />;
};
