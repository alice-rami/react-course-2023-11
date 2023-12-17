import { Reviews } from './component';
import { useGetReviewsByRestaurantQuery } from '../../redux/services/api';
import { useParams } from 'react-router-dom';
import { loaderCSSProps } from '../../constants/loader-css-props';
import { SyncLoader } from 'react-spinners';

export const ReviewsContainer = () => {
  const { restaurantId } = useParams();
  const { data, isFetching } = useGetReviewsByRestaurantQuery(
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

  return <Reviews reviews={data} restaurantId={restaurantId || ''} />;
};
