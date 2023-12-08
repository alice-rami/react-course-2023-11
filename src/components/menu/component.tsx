import classNames from 'classnames';
import { Dish } from '../dish/component';
import styles from './styles.module.css';

interface MenuProps {
  dishIds: string[];
  className?: string;
}

export const Menu = ({ dishIds, className }: MenuProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3 className={classNames(styles.title)}>Меню</h3>
      <ul className={classNames(styles.list)}>
        {dishIds.map((dishId) => (
          <li key={dishId} className={classNames(styles.itemContainer)}>
            <Dish dishId={dishId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
