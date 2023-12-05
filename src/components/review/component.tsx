import classNames from 'classnames';
import styles from './styles.module.css';
import review_icon from '../../images/review_icon.svg';
import { Rating } from '../rating/component';
import { useAppSelector } from '../../hooks/hooks';
import { selectReviewById } from '../../redux/features/entities/review/selectors';
import { selectUserById } from '../../redux/features/entities/user/selectors';

interface ReviewProps {
  reviewId: string;
  className?: string;
}

export const Review = ({ reviewId, className }: ReviewProps) => {
  const review = useAppSelector((state) => selectReviewById(state, reviewId));
  const user = useAppSelector((state) => selectUserById(state, review?.userId));

  if (!review) {
    return null;
  }

  const { text, rating } = review;

  return (
    <div className={classNames(styles.root)}>
      <img src={review_icon} className={classNames(styles.icon)} />
      <blockquote className={classNames(className)}>
        <Rating rating={rating} />
        <p className={classNames(styles.quote)}>"{text}"</p>
        <p className={classNames(styles.user)}>— {user && user.name}</p>
      </blockquote>
    </div>
  );
};
