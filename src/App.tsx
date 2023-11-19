import { RestaurantsPage } from './pages/restaurants-page/component';
import { TRestaurant } from './types/types';

interface AppProps {
  restaurants: TRestaurant[];
}

export const App = ({ restaurants }: AppProps) => {
  return <RestaurantsPage restaurants={restaurants} />;
};
