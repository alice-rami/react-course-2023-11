import { Review as ReviewEntity } from '../../types/types';

interface ReviewProps {
  review: ReviewEntity;
}

export const Review = ({ review }: ReviewProps) => {
  return (
    <div>
      <p>{review.text}</p>
    </div>
  );
};
