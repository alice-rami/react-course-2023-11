import classNames from 'classnames';
import { Review as ReviewEntity } from '../../types/types';
import styles from './styles.module.css';
import review_icon from '../../images/review_icon.svg';

interface ReviewProps {
  review: ReviewEntity;
  className?: string;
}

export const Review = ({ review, className }: ReviewProps) => {
  if (!review) {
    return null;
  }
  const { text, user } = review;

  return (
    <div className={classNames(styles.root)}>
      <img src={review_icon} className={classNames(styles.icon)} />
      <blockquote className={classNames(className)}>
        <p className={classNames(styles.quote)}>"{text}"</p>
        <p className={classNames(styles.user)}>— {user}</p>
      </blockquote>
    </div>
  );
};
