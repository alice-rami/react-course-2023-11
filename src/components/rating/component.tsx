import classNames from 'classnames';
import starFilled from '../../images/star_filled_icon.svg';
import starHalf from '../../images/star_half_icon.svg';
import styles from './styles.module.css';

interface RatingProps {
  rating: number;
  className?: string;
}
type RatingStatus = 'filled' | 'half';

const stars = {
  filled: starFilled,
  half: starHalf,
};

const createRatingScheme = (rating: number): RatingStatus[] => {
  const initialValue: RatingStatus[] = [];
  let filledCount = Math.trunc(rating);
  const halfFilledCount = filledCount === rating ? 0 : 1;
  while (filledCount > 0) {
    initialValue.push('filled');
    filledCount -= 1;
  }
  if (halfFilledCount === 1) {
    initialValue.push('half');
  }
  return initialValue;
};

export const Rating = ({ rating, className }: RatingProps) => {
  const ratingScheme = createRatingScheme(rating);
  return (
    <div className={classNames(styles.root, className)}>
      {ratingScheme.map((item) => (
        <img src={stars[item]} className={classNames(styles.star)} />
      ))}
    </div>
  );
};
