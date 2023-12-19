import classNames from 'classnames';
import styles from './styles.module.css';
import { SyncLoader } from 'react-spinners';
import { loaderCSSProps } from '../../constants/loader-css-props';
import { Dish as DishEntity } from '../../types/types';
import { Dish } from '../dish/component';

interface MenuProps {
  dishes: DishEntity[];
  isLoading?: boolean;
  className?: string;
}

export const Menu = ({ dishes, isLoading = false, className }: MenuProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3 className={classNames(styles.title)}>Меню</h3>
      <SyncLoader
        color='#ff8c00'
        size={10}
        speedMultiplier={1}
        loading={isLoading}
        cssOverride={loaderCSSProps}
      />
      {!isLoading && (
        <ul className={classNames(styles.list)}>
          {dishes.map((dish) => (
            <li key={dish.id} className={classNames(styles.itemContainer)}>
              <Dish dish={dish} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
