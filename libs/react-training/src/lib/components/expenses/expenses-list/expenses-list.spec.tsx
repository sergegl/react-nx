import { render } from '@testing-library/react';

import ExpensesList from './expenses-list';

describe('ExpensesList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpensesList />);
    expect(baseElement).toBeTruthy();
  });
});
