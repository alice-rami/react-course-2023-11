import classNames from 'classnames';
import { Review as ReviewEntity } from '../../types/types';
import { Review } from '../review/component';
import styles from './styles.module.css';

interface ReviewsProps {
  reviews: ReviewEntity[];
  className?: string;
}

export const Reviews = ({ reviews, className }: ReviewsProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3 className={classNames(styles.title)}>Отзывы</h3>
      <ul className={classNames(styles.list)}>
        {reviews.map((review) => (
          <li>
            <Review review={review} className={classNames(styles.review)} />
          </li>
        ))}
      </ul>
    </div>
  );
};
