import classNames from 'classnames';
import styles from './styles.module.css';
import { Restaurant as RestaurantEntity } from '../../types/types';
import { MenuContainer } from '../menu/container';
import { ReviewsContainer } from '../reviews/container';

interface RestaurantProps {
  restaurant: RestaurantEntity;
}

export const Restaurant = ({ restaurant }: RestaurantProps) => {
  if (!restaurant) {
    return null;
  }

  const { name, description, img, id } = restaurant;

  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.container)}>
        <img
          className={classNames(styles.image)}
          src={img}
          alt={`Ресторан «${name}»`}
        />
        <div className={classNames(styles.textContainer)}>
          <h2 className={classNames(styles.title)}>{name}</h2>
          <p className={classNames(styles.description)}>{description}</p>
        </div>
      </div>
      <MenuContainer restaurantId={id} />
      <ReviewsContainer restaurantId={id} />
    </div>
  );
};
