import { RestaurantsPage } from './pages/restaurants-page/component';
import { Restaurant } from './types/types';
import './styles/index.css';

interface AppProps {
  restaurants: Restaurant[];
}

export const App = ({ restaurants }: AppProps) => {
  return <RestaurantsPage restaurants={restaurants} />;
};
