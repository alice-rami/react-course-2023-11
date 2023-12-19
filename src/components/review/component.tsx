import classNames from 'classnames';
import styles from './styles.module.css';
import review_icon from '../../images/review_icon.svg';
import { Rating } from '../rating/component';
import { Review as ReviewEntity } from '../../types/types';
import { Button } from '../button/component';
import { User } from '../user/component';
import { useState } from 'react';
import { EditReviewFormContainer } from '../edit-review-form/container';
import { EditingData } from './container';

interface ReviewProps {
  review: ReviewEntity;
  userName: string;
  restaurantId: string;
  className?: string;
}

export const Review = ({
  review,
  userName,
  restaurantId,
  className,
}: ReviewProps) => {
  const [editingData, setEditingData] = useState<EditingData>({
    isEditing: false,
    reviewData: null,
  });
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

      {!editingData.isEditing && (
        <Button
          onClick={() => {
            setEditingData({ isEditing: true, reviewData });
          }}
          type='secondary'
          size='small'
          className={styles.editButton}
        >
          Редактировать
        </Button>
      )}

      {editingData.isEditing && editingData.reviewData && (
        <EditReviewFormContainer
          setEditingData={setEditingData}
          reviewData={editingData.reviewData}
          restaurantId={restaurantId}
        />
      )}
    </div>
  );
};
