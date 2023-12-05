import { RestaurantsPage } from './pages/restaurants-page/component';
import { Provider } from 'react-redux';
import store from './redux';

import './styles/index.css';

export const App = () => {
  return (
    <Provider store={store}>
      <RestaurantsPage />
    </Provider>
  );
};
