import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { RestaurantPickerItemContainer } from '../restaurant-picker-item/container';

interface RestaurantPickerProps {
  pickRestaurant: Dispatch<SetStateAction<string>>;
  restaurantIds: string[];
}

export const RestaurantPicker = ({
  pickRestaurant,
  restaurantIds,
}: RestaurantPickerProps) => {
  return (
    <nav className={classNames(styles.root)}>
      {restaurantIds.map((id) => {
        return (
          <RestaurantPickerItemContainer
            key={id}
            restaurantId={id}
            pickItem={() => pickRestaurant(id)}
          />
        );
      })}
    </nav>
  );
};
