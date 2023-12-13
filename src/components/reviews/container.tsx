import { Reviews } from './component';
import { useGetReviewsByRestaurantQuery } from '../../redux/services/api';
import { useState } from 'react';
import { ReviewDataWithId } from '../../types/types';

interface ReviewsContainerProps {
  restaurantId: string;
}
export type EditingData = {
  isEditing: boolean;
  reviewData: ReviewDataWithId | null;
};

export const ReviewsContainer = ({ restaurantId }: ReviewsContainerProps) => {
  const { data } = useGetReviewsByRestaurantQuery(restaurantId);
  const [editingData, setEditingData] = useState<EditingData>({
    isEditing: false,
    reviewData: null,
  });

  if (!data) {
    return null;
  }

  return (
    <Reviews
      reviews={data}
      editingData={editingData}
      setEditingData={setEditingData}
      restaurantId={restaurantId}
    />
  );
};
