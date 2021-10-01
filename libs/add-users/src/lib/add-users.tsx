import { useState } from 'react';
import style from './add-users.module.scss';
import AddUser from './components/users/add-user/add-user';
import UsersList from './components/users/users-list/users-list';
import { IUser } from './models/IUser';

/* eslint-disable-next-line */
export interface AddUsersProps {}

export function AddUsers(props: AddUsersProps) {
  const [usersList, setUsersList] = useState([] as IUser[]);

  const userAddHandler = (user: IUser) =>
    setUsersList((prevList) => [user, ...prevList]);

  return (
    <div className={style['app-wrapper']}>
      <AddUser onAddUser={userAddHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default AddUsers;
