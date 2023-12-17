import { Reviews } from './component';
import { useGetReviewsByRestaurantQuery } from '../../redux/services/api';
import { useParams } from 'react-router-dom';

export const ReviewsContainer = () => {
  const { restaurantId } = useParams();

  const { data } = useGetReviewsByRestaurantQuery(restaurantId || '');
  if (!data) {
    return null;
  }

  return <Reviews reviews={data} restaurantId={restaurantId || ''} />;
};
