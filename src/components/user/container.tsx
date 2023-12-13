import { useGetUsersQuery } from '../../redux/services/api';
import { User } from './component';

interface UserProps {
  userId: string;
}

export const UserContainer = ({ userId }: UserProps) => {
  const { data } = useGetUsersQuery();
  if (!data) {
    return null;
  }
  const user = data.find(({ id }) => id === userId);

  if (!user) {
    return null;
  }

  const { name } = user;

  return <User>— {name}</User>;
};
