import { Reviews } from './component';
import { useGetReviewsByRestaurantQuery } from '../../redux/services/api';

interface ReviewsContainerProps {
  restaurantId: string;
}

export const ReviewsContainer = ({ restaurantId }: ReviewsContainerProps) => {
  const { data } = useGetReviewsByRestaurantQuery(restaurantId);

  if (!data) {
    return null;
  }

  return <Reviews reviews={data} />;
};
