import classNames from 'classnames';
import styles from './styles.module.css';
import { Review as ReviewEntity } from '../../types/types';
import { NewReviewFormContainer } from '../new-review-form/container';
import { ReviewContainer } from '../review/container';

interface ReviewsProps {
  reviews: ReviewEntity[];
  restaurantId: string;
  className?: string;
}

export const Reviews = ({ reviews, restaurantId, className }: ReviewsProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3 className={classNames(styles.title)}>Отзывы</h3>
      <ul className={classNames(styles.list)}>
        {reviews.map((review) => (
          <li key={review.id}>
            <ReviewContainer
              review={review}
              restaurantId={restaurantId}
              className={classNames(styles.review)}
            />
          </li>
        ))}
      </ul>
      <NewReviewFormContainer restaurantId={restaurantId} />
    </div>
  );
};
