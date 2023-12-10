import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Menu } from './component';
import { getDishesByRestaurantId } from '../../redux/entities/dish/get-dishes/get-dishes';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';

interface MenuContainerProps {
  restaurantId: string;
}

export const MenuContainer = ({ restaurantId }: MenuContainerProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDishesByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  const dishIds = useAppSelector(
    (state) => selectRestaurantById(state, restaurantId).menu
  );
  return <Menu dishIds={dishIds} />;
};
