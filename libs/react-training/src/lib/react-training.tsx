import { useState } from 'react';
import Expenses from './components/expenses/expenses';
import NewExpense from './components/new-expense/new-expense';
import { IExpense } from './models/IExpenses';
import './react-training.module.scss';

const DUMMY_EXPENSES: IExpense[] = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2020, 5, 12),
  },
];

/* eslint-disable-next-line */
export interface ReactTrainingProps {
  name: string;
}

export function ReactTraining(props: ReactTrainingProps) {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense: IExpense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExepense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default ReactTraining;
