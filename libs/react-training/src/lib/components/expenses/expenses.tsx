import { IExpense } from '../../models/IExpenses';
import Card from '../UI/card/card';
import style from './expenses.module.scss';
import ExpensesFilter from './expenses-filter/expenses-filter';
import { useState } from 'react';
import ExpensesList from './expenses-list/expenses-list';
import Chart from '../chart/chart';
import ExpensesChart from './expenses-chart/expenses-chart';

/* eslint-disable-next-line */
export interface ExpensesProps {
  items: IExpense[];
}

export function Expenses({ items }: ExpensesProps) {
  const defaultFilterYear = String(new Date().getFullYear());

  const [filteredYear, setFilteredYear] = useState(defaultFilterYear);

  const dateFilterChangeHandler = (year: string) => {
    setFilteredYear(year);
  };

  const filteredData = items.filter(
    (expense) => expense.date.getFullYear() === Number(filteredYear)
  );

  return (
    <Card className={style.expenses}>
      <ExpensesFilter
        onFilteredDateChange={dateFilterChangeHandler}
        selected={filteredYear}
      />
      <ExpensesChart expenses={filteredData} />
      <ExpensesList data={filteredData} />
    </Card>
  );
}

export default Expenses;
