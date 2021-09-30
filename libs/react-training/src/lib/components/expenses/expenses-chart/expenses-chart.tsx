import { IChart } from '../../../models/IChart';
import { IExpense } from '../../../models/IExpenses';
import Chart from '../../chart/chart';
import './expenses-chart.module.scss';

/* eslint-disable-next-line */
export interface ExpensesChartProps {
  expenses: IExpense[];
}

export function ExpensesChart({ expenses }: ExpensesChartProps) {
  const chartDataPoints: IChart[] = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;
