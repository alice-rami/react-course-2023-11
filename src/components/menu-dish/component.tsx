import { TDish } from '../../types/types';

interface DishProps {
  dish: TDish;
}

export const MenuDish = ({ dish }: DishProps) => {
  return (
    <li>
      <h4>{dish.name}</h4>
      <p>{dish.ingredients.join(', ')}</p>
    </li>
  );
};
