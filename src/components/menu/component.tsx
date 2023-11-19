import { TDish } from '../../types/types';
import { MenuDish } from '../menu-dish/component';

interface MenuProps {
  menu: TDish[];
}

export const Menu = ({ menu }: MenuProps) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map((dish) => (
          <MenuDish dish={dish} />
        ))}
      </ul>
    </>
  );
};
