import { TReview } from '../../types/types';

interface ReviewProps {
  review: TReview;
}

export const Review = ({ review }: ReviewProps) => {
  return (
    <li>
      <p>{review.text}</p>
    </li>
  );
};
