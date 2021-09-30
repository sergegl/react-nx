import style from './expenses-filter.module.scss';
import React, { useState } from 'react';

/* eslint-disable-next-line */
export interface ExpensesFilterProps {
  onFilteredDateChange: (year: string) => void;
  selected: string;
}

export function ExpensesFilter(props: ExpensesFilterProps) {
  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = event.target.value;
    props.onFilteredDateChange(selectedYear);
  };

  return (
    <div className={style['expenses-filter']}>
      <div className={style['expenses-filter__control']}>
        <label>Filter by year</label>
        <select onChange={handleYearChange} value={props.selected}>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
