import { render } from '@testing-library/react';

import ExpenseDate from './expense-date';

describe('ExpenseDate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpenseDate date={new Date()} />);
    expect(baseElement).toBeTruthy();
  });
});
