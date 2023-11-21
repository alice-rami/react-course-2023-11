import { Dish as DishEntity } from '../../types/types';

interface DishProps {
  dish: DishEntity;
}

export const Dish = ({ dish }: DishProps) => {
  return (
    <div>
      <h4>{dish.name}</h4>
      <p>{dish.ingredients.join(', ')}</p>
    </div>
  );
};
