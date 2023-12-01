import { Dish as DishEntity } from '../../types/types';
import { Counter } from '../counter/component';
import { useState } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

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
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.detailsContainer)}>
        <h4>{name}</h4>
        <p className={classNames(styles.ingredients)}>
          {ingredients.join(', ')}
        </p>
      </div>
      <Counter
        value={count}
        increment={() => setCount(count + 1)}
        decrement={() => setCount(count - 1)}
        min={0}
        max={5}
      />
    </div>
  );
};
