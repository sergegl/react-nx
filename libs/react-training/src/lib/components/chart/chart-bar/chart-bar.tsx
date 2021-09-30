import { IChart } from '../../../models/IChart';
import style from './chart-bar.module.scss';

/* eslint-disable-next-line */
export interface ChartBarProps extends IChart {
  value: number;
  label: string;
  maxValue: number;
}

export function ChartBar({ value, label, maxValue }: ChartBarProps) {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = `${Math.round((value / maxValue) * 100)}%`;
  }

  return (
    <div className={style['chart-bar']}>
      <div className={style['chart-bar__inner']}>
        <div
          className={style['chart-bar__fill']}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={style['chart-label']}>{label}</div>
    </div>
  );
}

export default ChartBar;
