import { IUser } from '../../../models/IUser';
import Card from '../../ui/card/card';
import style from './users-list.module.scss';

/* eslint-disable-next-line */
export interface UsersListProps {
  users: IUser[];
}

export function UsersList({ users }: UsersListProps) {
  return (
    <Card className={style.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username}, ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
