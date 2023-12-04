import classNames from 'classnames';
import { Review as ReviewEntity } from '../../types/types';
import styles from './styles.module.css';
import review_icon from '../../images/review_icon.svg';
import { Rating } from '../rating/component';

interface ReviewProps {
  review: ReviewEntity;
  className?: string;
}

export const Review = ({ review, className }: ReviewProps) => {
  if (!review) {
    return null;
  }
  const { text, user, rating } = review;

  return (
    <div className={classNames(styles.root)}>
      <img src={review_icon} className={classNames(styles.icon)} />
      <blockquote className={classNames(className)}>
        <Rating rating={rating} />
        <p className={classNames(styles.quote)}>"{text}"</p>
        <p className={classNames(styles.user)}>— {user}</p>
      </blockquote>
    </div>
  );
};
