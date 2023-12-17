import { RestaurantsPageContainer } from './pages/restaurants-page/container';
import { Provider } from 'react-redux';
import store from './redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './styles/index.css';
import { Layout } from './components/layout/component';
import { NotFoundPage } from './pages/not-found-page/component';
import { RestaurantContainer } from './components/restaurant/container';
import { ReviewsContainer } from './components/reviews/container';
import { MenuContainer } from './components/menu/container';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Navigate to='restaurants' replace />} />
            <Route path='restaurants' element={<RestaurantsPageContainer />}>
              <Route path=':restaurantId' element={<RestaurantContainer />}>
                <Route index element={<Navigate to='menu' replace />} />
                <Route path='menu' element={<MenuContainer />} />
                <Route path='reviews' element={<ReviewsContainer />} />
              </Route>
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
