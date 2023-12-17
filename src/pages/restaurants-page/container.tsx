import { RestaurantsPage } from './component';
import { useGetRestaurantsQuery } from '../../redux/services/api';
import { SyncLoader } from 'react-spinners';
import { loaderCSSProps } from '../../constants/loader-css-props';

export const RestaurantsPageContainer = () => {
  const { isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return (
      <SyncLoader
        color='#ff8c00'
        size={10}
        speedMultiplier={1}
        loading={isLoading}
        cssOverride={loaderCSSProps}
      />
    );
  }

  return <RestaurantsPage />;
};
