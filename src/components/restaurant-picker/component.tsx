import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { RestaurantPickerItemContainer } from '../restaurant-picker-item/container';
import { Restaurant } from '../../types/types';

interface RestaurantPickerProps {
  pickRestaurant: Dispatch<SetStateAction<string>>;
  restaurants: Restaurant[];
}

export const RestaurantPicker = ({
  pickRestaurant,
  restaurants,
}: RestaurantPickerProps) => {
  return (
    <nav className={classNames(styles.root)}>
      {restaurants.map((restaurant) => {
        return (
          <RestaurantPickerItemContainer
            key={restaurant.id}
            restaurant={restaurant}
            pickItem={() => pickRestaurant(restaurant.id)}
          />
        );
      })}
    </nav>
  );
};
