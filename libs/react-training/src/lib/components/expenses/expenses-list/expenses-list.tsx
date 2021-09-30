import { IExpense } from '../../../models/IExpenses';
import { ExpenseItem } from '../expense-item/expense-item';
import style from './expenses-list.module.scss';

/* eslint-disable-next-line */
export interface ExpensesListProps {
  data: IExpense[];
}

export function ExpensesList({ data }: ExpensesListProps) {
  const renderExpenses = (expenses: IExpense[]) =>
    expenses.map((expense) => (
      <ExpenseItem key={expense.id} expense={expense} />
    ));

  if (data.length === 0) {
    return (
      <h2 className={style['expenses-list__fallback']}>No expenses found.</h2>
    );
  }
  return <ul className={style['expenses-list']}>{renderExpenses(data)}</ul>;
}

export default ExpensesList;
