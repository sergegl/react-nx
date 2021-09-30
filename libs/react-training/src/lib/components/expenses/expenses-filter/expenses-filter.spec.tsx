import { render } from '@testing-library/react';

import ExpensesFilter from './expenses-filter';

describe('FilterExpenses', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpensesFilter />);
    expect(baseElement).toBeTruthy();
  });
});
