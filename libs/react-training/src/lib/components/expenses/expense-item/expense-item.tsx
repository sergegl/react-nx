import { IExpense } from '../../../models/IExpenses';
import Card from '../../UI/card/card';
import ExpenseDate from '../expense-date/expense-date';
import style from './expense-item.module.scss';

/* eslint-disable-next-line */
export interface ExpenseItemProps {
  expense: IExpense;
}

export function ExpenseItem({ expense }: ExpenseItemProps) {
  return (
    <li>
      <Card className={style['expense-item']}>
        <ExpenseDate date={expense.date} />

        <div className={style['expense-item__description']}>
          <h2>{expense.title}</h2>
          <div className={style['expense-item__price']}>${expense.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
