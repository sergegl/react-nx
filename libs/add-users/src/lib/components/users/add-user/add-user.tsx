import React, { useState } from 'react';
import { IModal } from '../../../models/IModal';
import { IUser } from '../../../models/IUser';
import Button from '../../ui/button/button/button';
import Card from '../../ui/card/card';
import ErrorModal from '../../ui/error-modal/error-modal';
import style from './add-user.module.scss';

/* eslint-disable-next-line */
export interface AddUserProps {
  onAddUser: (data: IUser) => void;
}

export function AddUser(props: AddUserProps) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState({} as IModal);

  const usernameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => setEnteredUsername(event.target.value);

  const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setEnteredAge(event.target.value);

  const addUserHandler = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter valid name and age (non-empty values).',
      });
      return;
    }

    if (Number(enteredAge) < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    const newUser: IUser = {
      username: enteredUsername,
      age: Number(enteredAge),
      id: Math.random().toString(),
    };

    props.onAddUser(newUser);

    clearForm();
  };

  const clearForm = (): void => {
    setEnteredUsername('');
    setEnteredAge('');
  };

  const errorConfirmHandler = () => {
    setError({} as IModal);
  };

  return (
    <>
      {Object.keys(error)?.length > 0 && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorConfirmHandler}
        />
      )}

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
    </>
  );
}

export default AddUser;
