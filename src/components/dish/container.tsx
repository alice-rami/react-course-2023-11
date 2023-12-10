import { useAppSelector } from '../../hooks/hooks';
import { selectDishById } from '../../redux/entities/dish/selectors';
import { Dish } from './component';

interface DishContainerProps {
  dishId: string;
}

export const DishContainer = ({ dishId }: DishContainerProps) => {
  const dish = useAppSelector((state) => selectDishById(state, dishId));
  return <Dish dish={dish} />;
};
