import classNames from 'classnames';
import styles from './styles.module.css';
import { Dish as DishEntity } from '../../types/types';
import { Dish } from '../dish/component';

interface MenuProps {
  dishes: DishEntity[];
  className?: string;
}

export const Menu = ({ dishes, className }: MenuProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3 className={classNames(styles.title)}>Меню</h3>
      <ul className={classNames(styles.list)}>
        {dishes.map((dish) => (
          <li key={dish.id} className={classNames(styles.itemContainer)}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
