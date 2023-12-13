import classNames from 'classnames';
import styles from './styles.module.css';
import review_icon from '../../images/review_icon.svg';
import { Rating } from '../rating/component';
import { Review as ReviewEntity } from '../../types/types';
import { Button } from '../button/component';
import { User } from '../user/component';
import { useGetUsersQuery } from '../../redux/services/api';
import { EditingData } from '../reviews/container';

interface ReviewProps {
  review: ReviewEntity;
  setEditingData: React.Dispatch<React.SetStateAction<EditingData>>;
  className?: string;
}

export const Review = ({
  review,
  setEditingData,
  className,
}: ReviewProps) => {
  const { user } = useGetUsersQuery(undefined, {
    selectFromResult: ({ data }) => ({
      user: data?.find((user) => user.id === review.userId),
    }),
  });

  const userName = user?.name || '';

  if (!review) {
    return null;
  }

  const { text, rating } = review;
  const reviewData = { ...review, name: userName };

  return (
    <div className={classNames(styles.root)}>
      <img src={review_icon} className={classNames(styles.icon)} />
      <blockquote className={classNames(className)}>
        <Rating rating={rating} />
        <p className={classNames(styles.quote)}>"{text}"</p>
        <User>{userName}</User>
      </blockquote>
      <Button
        onClick={() => {
          setEditingData({isEditing: true, reviewData});
        }}
        type='secondary'
        size='small'
        className={styles.editButton}
      >
        Редактировать
      </Button>
    </div>
  );
};
