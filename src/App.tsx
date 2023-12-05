import { RestaurantsPage } from './pages/restaurants-page/component';
import { Restaurant } from './types/types';
import { Provider } from 'react-redux';
import store from './redux';

import './styles/index.css';

interface AppProps {
  restaurants: Restaurant[];
}

export const App = ({ restaurants }: AppProps) => {
  return (
    <Provider store={store}>
      <RestaurantsPage restaurants={restaurants} />
    </Provider>
  );
};
