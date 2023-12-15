import { useAppSelector } from '../../hooks/hooks';
import { selectUserById } from '../../redux/entities/user/selectors';
import { User } from './component';

interface UserProps {
  userId: string;
}

export const UserContainer = ({ userId }: UserProps) => {
  const user = useAppSelector((state) => selectUserById(state, userId));
  if (!user) {
    return null;
  }
  const { name } = user;
  return <User>— {name}</User>;
};
