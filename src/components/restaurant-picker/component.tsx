import styles from './styles.module.css';
import classNames from 'classnames';
import { Restaurant } from '../../types/types';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../theme-context/hook';

interface RestaurantPickerProps {
  restaurants: Restaurant[];
}

export const RestaurantPicker = ({ restaurants }: RestaurantPickerProps) => {
  const { theme } = useTheme();
  return (
    <nav className={classNames(styles.root)}>
      {restaurants.map((restaurant) => {
        return (
          <NavLink
            key={restaurant.id}
            to={`/restaurants/${restaurant.id}`}
            className={({ isActive }) =>
              classNames(styles.navItem, {
                [styles.active]: isActive && theme !== 'dark',
                [styles.activeDark]: isActive && theme === 'dark',
                [styles.dark]: !isActive && theme === 'dark',
              })
            }
          >
            {restaurant.name}
          </NavLink>
        );
      })}
    </nav>
  );
};
