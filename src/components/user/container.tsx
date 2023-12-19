import { useGetUsersQuery } from '../../redux/services/api';
import { User } from './component';

interface UserProps {
  userId: string;
}

export const UserContainer = ({ userId }: UserProps) => {
  const { user } = useGetUsersQuery(undefined, {
    selectFromResult: ({ data }) => ({
      user: data?.find((user) => user.id === userId),
    }),
  });

  if (!user) {
    return null;
  }

  const { name } = user;

  return <User>— {name}</User>;
};
