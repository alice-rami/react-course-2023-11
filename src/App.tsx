import { RestaurantsPage } from './pages/restaurants-page/component';
import { Restaurant } from './types/types';

interface AppProps {
  restaurants: Restaurant[];
}

export const App = ({ restaurants }: AppProps) => {
  return <RestaurantsPage restaurants={restaurants} />;
};
