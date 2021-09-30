import { IChart } from '../../models/IChart';
import { ChartBar } from './chart-bar/chart-bar';
import style from './chart.module.scss';

/* eslint-disable-next-line */
export interface ChartProps {
  dataPoints: IChart[];
}

export function Chart({ dataPoints }: ChartProps) {
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);

  const renderMonths = (): JSX.Element[] =>
    dataPoints.map((dataPoint) => (
      <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
      />
    ));

  return <div className={style.chart}>{renderMonths()}</div>;
}

export default Chart;
