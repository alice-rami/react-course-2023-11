import { Menu } from './component';
import { useGetDishesByRestaurantQuery } from '../../redux/services/api';
import { useParams } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { loaderCSSProps } from '../../constants/loader-css-props';

export const MenuContainer = () => {
  const { restaurantId } = useParams();
  const { data, isFetching } = useGetDishesByRestaurantQuery(
    restaurantId || ''
  );

  if (isFetching) {
    return (
      <SyncLoader
        color='#ff8c00'
        size={10}
        speedMultiplier={1}
        loading={isFetching}
        cssOverride={loaderCSSProps}
      />
    );
  }

  if (!data) {
    return null;
  }

  return <Menu dishes={data} />;
};
