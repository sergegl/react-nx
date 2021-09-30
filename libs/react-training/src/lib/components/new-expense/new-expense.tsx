import { useState } from 'react';
import { IExpense } from '../../models/IExpenses';
import ExpenseForm from './expense-form/expense-form';
import style from './new-expense.module.scss';

/* eslint-disable-next-line */
export interface NewExpenseProps {
  onAddExepense: (data: IExpense) => void
}

export function NewExpense(props: NewExpenseProps) {
  const saveExpenseDataHandler = (enteredExpenseData: IExpense) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExepense(expenseData);
  };

  return (
    <div className={style['new-expense']}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
