import { PickerItem } from '../picker-item/component';
import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { useAppSelector } from '../../hooks/hooks';
import { selectRestaurantIdsAndNames } from '../../redux/features/entities/restaurant/selectors';

interface RestaurantPickerProps {
  pickRestaurant: Dispatch<SetStateAction<string>>;
}

export const RestaurantPicker = ({ pickRestaurant }: RestaurantPickerProps) => {
  const restaurantIdsAndNames = useAppSelector((state) =>
    selectRestaurantIdsAndNames(state)
  );
  return (
    <nav className={classNames(styles.root)}>
      {restaurantIdsAndNames.map(([id, name]) => {
        return <PickerItem pickItem={() => pickRestaurant(id)} value={name} />;
      })}
    </nav>
  );
};
