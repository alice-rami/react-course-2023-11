import classNames from 'classnames';
import styles from './styles.module.css';
import { Review as ReviewEntity } from '../../types/types';
import { Review } from '../review/component';
import { NewReviewFormContainer } from '../new-review-form/container';
import { EditReviewFormContainer } from '../edit-review-form/container';
import { EditingData } from './container';

interface ReviewsProps {
  reviews: ReviewEntity[];
  restaurantId: string;
  editingData: EditingData;
  setEditingData: React.Dispatch<React.SetStateAction<EditingData>>;
  className?: string;
}

export const Reviews = ({
  reviews,
  restaurantId,
  editingData,
  setEditingData,
  className,
}: ReviewsProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3 className={classNames(styles.title)}>Отзывы</h3>
      <ul className={classNames(styles.list)}>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review
              review={review}
              className={classNames(styles.review)}
              setEditingData={setEditingData}
            />
          </li>
        ))}
      </ul>
      {editingData.isEditing && editingData.reviewData ? (
        <EditReviewFormContainer
          setEditingData={setEditingData}
          reviewData={editingData.reviewData}
          restaurantId={restaurantId}
        />
      ) : (
        <NewReviewFormContainer restaurantId={restaurantId} />
      )}
    </div>
  );
};
