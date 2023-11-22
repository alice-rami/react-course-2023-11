import { Dish as DishEntity } from '../../types/types';
import { Dish } from '../dish/component';

interface MenuProps {
  menu: DishEntity[];
}

export const Menu = ({ menu }: MenuProps) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menu.map((dish) => (
          <li key={dish.id}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
