import { ReviewForm } from '../review-form/component';
import { useCreateReviewByRestaurantMutation } from '../../redux/services/api';
import { ReviewData } from '../../types/types';
import { DEFAULT_FORM_VALUES } from '../../constants/review-form';

interface NewReviewFormContainerProps {
  restaurantId: string;
}

export const NewReviewFormContainer = ({
  restaurantId,
}: NewReviewFormContainerProps) => {
  const [createReview] = useCreateReviewByRestaurantMutation();
  return (
    <ReviewForm
      buttonTitle={'Отправить'}
      formTitle={'Оставить отзыв'}
      onSubmit={(reviewData: ReviewData) => {
        createReview({ restaurantId, newReview: reviewData });
      }}
      defaultValue={DEFAULT_FORM_VALUES}
    />
  );
};
