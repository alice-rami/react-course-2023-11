import { TReview } from '../../types/types';
import { Review } from '../review/component';

interface ReviewsProps {
  reviews: TReview[];
}

export const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <Review review={review} />
        ))}
      </ul>
    </>
  );
};
