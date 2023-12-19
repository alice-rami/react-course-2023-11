import { useGetUsersQuery } from '../../redux/services/api';
import { Review } from './component';
import { ReviewDataWithId, Review as ReviewEntity } from '../../types/types';

export type EditingData = {
  isEditing: boolean;
  reviewData: ReviewDataWithId | null;
};

interface ReviewContainerProps {
  review: ReviewEntity;
  restaurantId: string;
  className?: string;
}

export const ReviewContainer = ({ review, ...rest }: ReviewContainerProps) => {
  const { user } = useGetUsersQuery(undefined, {
    selectFromResult: ({ data }) => ({
      user: data?.find((user) => user.id === review.userId),
    }),
  });

  const userName = user?.name || '';

  return <Review review={review} userName={userName} {...rest} />;
};
