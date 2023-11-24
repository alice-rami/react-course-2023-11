import { Dish as DishEntity } from '../../types/types';
import { Counter } from '../counter/component';
import { useState } from 'react';

interface DishProps {
  dish: DishEntity;
}

export const Dish = ({ dish }: DishProps) => {
  const [count, setCount] = useState(0);
  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;
  return (
    <div>
      <h4>{name}</h4>
      <p>{ingredients.join(', ')}</p>
      <Counter count={count} setCount={setCount} step={1} min={0} max={5} />
    </div>
  );
};
