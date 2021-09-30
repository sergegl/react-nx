import { render } from '@testing-library/react';

import NewExpense from './new-expense';

describe('NewExpense', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewExpense />);
    expect(baseElement).toBeTruthy();
  });
});
