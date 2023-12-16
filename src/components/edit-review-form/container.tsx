import { ReviewForm } from '../review-form/component';
import { useEditReviewByRestaurantMutation } from '../../redux/services/api';
import { ReviewDataWithId } from '../../types/types';
import { EditingData } from '../review/container';
import { Overlay } from '../overlay/component';
import styles from './styles.module.css';

interface EditReviewFormContainerProps {
  setEditingData: React.Dispatch<React.SetStateAction<EditingData>>;
  reviewData: ReviewDataWithId;
  restaurantId: string;
}

export const EditReviewFormContainer = ({
  setEditingData,
  reviewData,
  restaurantId,
}: EditReviewFormContainerProps) => {
  const [editReview] = useEditReviewByRestaurantMutation();
  return (
    <div>
      <ReviewForm
        formTitle='Редактировать отзыв'
        buttonTitle='Сохранить'
        defaultValue={reviewData}
        onSubmit={(formData) => {
          editReview({
            restaurantId,
            reviewId: reviewData.id,
            editedReview: formData,
          });
          setEditingData({ isEditing: false, reviewData: null });
        }}
        className={styles.root}
      />
      <Overlay
        onClick={() => setEditingData({ isEditing: false, reviewData: null })}
      />
    </div>
  );
};
