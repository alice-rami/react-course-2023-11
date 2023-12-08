import classNames from 'classnames';
import { Review } from '../review/component';
import styles from './styles.module.css';

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
          <li>
            <Review reviewId={reviewId} className={classNames(styles.review)} />
          </li>
        ))}
      </ul>
    </div>
  );
};
