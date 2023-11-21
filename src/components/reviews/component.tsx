import { Review as ReviewEntity } from '../../types/types';
import { Review } from '../review/component';

interface ReviewsProps {
  reviews: ReviewEntity[];
}

export const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <li>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
