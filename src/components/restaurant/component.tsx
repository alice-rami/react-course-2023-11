import classNames from 'classnames';
import styles from './styles.module.css';
import { Restaurant as RestaurantEntity } from '../../types/types';
import { NavLink, Outlet } from 'react-router-dom';

interface RestaurantProps {
  restaurant: RestaurantEntity;
}

export const Restaurant = ({ restaurant }: RestaurantProps) => {
  if (!restaurant) {
    return null;
  }

  const { name, description, img, id } = restaurant;

  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.container)}>
        <img
          className={classNames(styles.image)}
          src={img}
          alt={`Ресторан «${name}»`}
        />
        <div className={classNames(styles.textContainer)}>
          <h2 className={classNames(styles.title)}>{name}</h2>
          <p className={classNames(styles.description)}>{description}</p>
        </div>
      </div>
      <nav className={classNames(styles.nav)}>
        <span className={styles.navItemContainer}>
          <NavLink
            to={`/restaurants/${id}/menu`}
            className={({ isActive }) =>
              classNames(styles.navItem, {
                [styles.active]: isActive,
              })
            }
          >
            Меню
          </NavLink>
        </span>
        <span className={styles.navItemContainer}>
          <NavLink
            to={`/restaurants/${id}/reviews`}
            className={({ isActive }) =>
              classNames(styles.navItem, {
                [styles.active]: isActive,
              })
            }
          >
            Отзывы
          </NavLink>
        </span>
      </nav>
      <Outlet />
    </div>
  );
};
