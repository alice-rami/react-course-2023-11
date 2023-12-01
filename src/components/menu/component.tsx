import classNames from 'classnames';
import { Dish as DishEntity } from '../../types/types';
import { Dish } from '../dish/component';
import styles from './styles.module.css';

interface MenuProps {
  menu: DishEntity[];
  className?: string;
}

export const Menu = ({ menu, className }: MenuProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3 className={classNames(styles.title)}>Меню</h3>
      <ul className={classNames(styles.list)}>
        {menu.map((dish) => (
          <li key={dish.id} className={classNames(styles.itemContainer)}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
