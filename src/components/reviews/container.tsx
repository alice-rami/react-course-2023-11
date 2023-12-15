import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Reviews } from './component';
import { getReviewsByRestaurantId } from '../../redux/entities/review/get-reviews/get-reviews';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';

interface ReviewsContainerProps {
  restaurantId: string;
}

export const ReviewsContainer = ({ restaurantId }: ReviewsContainerProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId));
  }, [restaurantId, dispatch]);

  const reviewIds = useAppSelector(
    (state) => selectRestaurantById(state, restaurantId).reviews
  );
  return <Reviews reviewIds={reviewIds} />;
};
