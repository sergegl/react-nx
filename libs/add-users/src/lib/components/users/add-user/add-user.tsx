import { stringify } from 'querystring';
import React, { useState } from 'react';
import { IUser } from '../../../models/IUser';
import Button from '../../ui/button/button/button';
import Card from '../../ui/card/card';
import style from './add-user.module.scss';

/* eslint-disable-next-line */
export interface AddUserProps {
  onAddUser: (data: IUser) => void;
}

export function AddUser(props: AddUserProps) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => setEnteredUsername(event.target.value);

  const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setEnteredAge(event.target.value);

  const addUserHandler = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault();

    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      Number(enteredAge) < 1
    ) {
      return;
    }

    const payload: IUser = {
      username: enteredUsername,
      age: Number(enteredAge),
    };

    props.onAddUser(payload);

    clearForm();
  };

  const clearForm = (): void => {
    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <Card className={style.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />

        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        />

        <Button type="submit" onClick={addUserHandler}>
          Add User
        </Button>
      </form>
    </Card>
  );
}

export default AddUser;
