import classNames from 'classnames';
import styles from './styles.module.css';
import { DishContainer } from '../dish/container';
import { SyncLoader } from 'react-spinners';
import { loaderCSSProps } from '../../constants/loader-css-props';

interface MenuProps {
  dishIds: string[];
  isLoading?: boolean;
  className?: string;
}

export const Menu = ({ dishIds, isLoading = false, className }: MenuProps) => {
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
          {dishIds.map((dishId) => (
            <li key={dishId} className={classNames(styles.itemContainer)}>
              <DishContainer dishId={dishId} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
