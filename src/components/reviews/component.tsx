import classNames from 'classnames';
import styles from './styles.module.css';
import { ReviewContainer } from '../review/container';

interface ReviewsProps {
  reviewIds: string[];
  className?: string;
}

export const Reviews = ({ reviewIds, className }: ReviewsProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3 className={classNames(styles.title)}>Отзывы</h3>
      <ul className={classNames(styles.list)}>
        {reviewIds.map((reviewId) => (
          <li key={reviewId}>
            <ReviewContainer
              reviewId={reviewId}
              className={classNames(styles.review)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
