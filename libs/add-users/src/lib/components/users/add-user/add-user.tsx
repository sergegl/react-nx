import React, { useState, useRef, RefObject } from 'react';
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
  const nameInputRef = React.useRef<HTMLInputElement>(null);
  const ageInputRef = React.useRef<HTMLInputElement>(null);

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState({} as IModal);

  // const usernameChangeHandler = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ): void => setEnteredUsername(event.target.value);

  // const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void =>
  // setEnteredAge(event.target.value);

  const addUserHandler = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredUserAge = ageInputRef.current?.value;

    if (
      enteredName?.trim().length === 0 ||
      enteredUserAge?.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter valid name and age (non-empty values).',
      });
      return;
    }

    if (Number(enteredUserAge) < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    const newUser: IUser = {
      username: String(enteredName),
      age: Number(enteredUserAge),
      id: Math.random().toString(),
    };

    props.onAddUser(newUser);
    clearForm();
  };

  const clearForm = (): void => {
    // setEnteredUsername('');
    // setEnteredAge('');

    // rarelly do that, but in this case is ok...
    if (nameInputRef.current) {
      nameInputRef.current.value = '';
    }
    if (ageInputRef.current) {
      ageInputRef.current.value = '';
    }
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
          <input id="username" type="text" ref={nameInputRef} />

          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />

          <Button type="submit" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
