import { useAppSelector } from '../../hooks/hooks';
import { selectReviewById } from '../../redux/entities/review/selectors';
import { Review } from './component';

interface ReviewContainerProps {
  reviewId: string;
  className?: string;
}

export const ReviewContainer = ({
  reviewId,
  className,
}: ReviewContainerProps) => {
  const review = useAppSelector((state) => selectReviewById(state, reviewId));
  return <Review review={review} className={className} />;
};
