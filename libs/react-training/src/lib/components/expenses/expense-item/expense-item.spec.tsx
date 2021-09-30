import { render } from '@testing-library/react';

import ExpenseItem from './expense-item';

describe('ExpenseItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpenseItem />);
    expect(baseElement).toBeTruthy();
  });
});
