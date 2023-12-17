import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { RestaurantPickerItemContainer } from '../restaurant-picker-item/container';
import { Restaurant } from '../../types/types';
import { NavLink } from 'react-router-dom';

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
          <NavLink key={restaurant.id} to={`/restaurants/${restaurant.id}`}>
            <RestaurantPickerItemContainer
              restaurant={restaurant}
              pickItem={() => pickRestaurant(restaurant.id)}
            />
          </NavLink>
        );
      })}
    </nav>
  );
};
