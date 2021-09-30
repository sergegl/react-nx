import { render } from '@testing-library/react';

import ExpensesChart from './expenses-chart';

describe('ExpensesChart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpensesChart />);
    expect(baseElement).toBeTruthy();
  });
});
