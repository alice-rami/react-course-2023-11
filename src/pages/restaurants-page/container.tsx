import { RestaurantsPage } from './component';
import { useGetRestaurantsQuery } from '../../redux/services/api';

export const RestaurantsPageContainer = () => {
  const { isLoading } = useGetRestaurantsQuery();

  return <RestaurantsPage isLoading={isLoading} />;
};
