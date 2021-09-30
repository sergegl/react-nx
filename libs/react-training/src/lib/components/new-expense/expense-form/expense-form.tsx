import React, { useState } from 'react';
import { IExpense } from '../../../models/IExpenses';
import style from './expense-form.module.scss';

/* eslint-disable-next-line */
export interface ExpenseFormProps {
  onSaveExpenseData: (data: IExpense) => void;
}

export function ExpenseForm(props: ExpenseFormProps) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // });

  // const formChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, [event.target.name]: event.target.value };
  //   });
  // };

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
  };

  const formVisibabilityHandler = (event: React.FormEvent<EventTarget>) => {
    setIsFormVisible((prevState) => {
      return !prevState;
    });
  };

  const submitHandler = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();

    const expenseData: IExpense = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    clearForm();
  };

  const clearForm = (): void => {
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  if (!isFormVisible) {
    return (
      <div>
        <button onClick={formVisibabilityHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={style['new-expense__controls']}>
          <div className={style['new-expense__control']}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
        </div>

        <div className={style['new-expense__controls']}>
          <div className={style['new-expense__control']}>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
        </div>

        <div className={style['new-expense__controls']}>
          <div className={style['new-expense__control']}>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
        </div>

        <div className={style['new-expense__actions']}>
          <button onClick={formVisibabilityHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
