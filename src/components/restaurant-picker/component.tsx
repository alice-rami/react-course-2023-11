import { PickerItem } from '../picker-item/component';
import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

interface RestaurantPickerProps {
  restaurants: { name: string; id: string }[];
  pickRestaurant: Dispatch<SetStateAction<string>>;
}

export const RestaurantPicker = ({
  restaurants,
  pickRestaurant,
}: RestaurantPickerProps) => {
  return (
    <nav className={classNames(styles.root)}>
      {restaurants.map(({ name, id }) => (
        <PickerItem pickItem={() => pickRestaurant(id)} value={name} />
      ))}
    </nav>
  );
};
