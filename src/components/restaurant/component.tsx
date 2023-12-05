import classNames from 'classnames';
import { Menu } from '../menu/component';
import { ReviewForm } from '../review-form/component';
import { Reviews } from '../reviews/component';
import styles from './styles.module.css';
import { useAppSelector } from '../../hooks/hooks';
import { selectRestaurantById } from '../../redux/features/entities/restaurant/selectors';

interface RestaurantProps {
  restaurantId: string;
}

export const Restaurant = ({ restaurantId }: RestaurantProps) => {
  const restaurant = useAppSelector((store) =>
    selectRestaurantById(store, restaurantId)
  );
  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div className={classNames(styles.root)}>
      <h2 className={classNames(styles.title)}>{name}</h2>
      <Menu dishIds={menu} />
      <Reviews reviewIds={reviews} />
      <ReviewForm key={restaurantId} />
    </div>
  );
};
