import style from './expense-date.module.scss';

/* eslint-disable-next-line */
export interface ExpenseDateProps {
  date: Date;
}

export function ExpenseDate({ date }: ExpenseDateProps) {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  const day = date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <div className={style['expense-date']}>
      <div className={style['expense-date__month']}>{month}</div>
      <div className={style['expense-date__year']}>{year}</div>
      <div className={style['expense-date__day']}>{day}</div>
    </div>
  );
}

export default ExpenseDate;
