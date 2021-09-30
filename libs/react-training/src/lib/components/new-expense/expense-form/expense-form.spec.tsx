import { render } from '@testing-library/react';

import ExpenseForm from './expense-form';

describe('ExpenseForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpenseForm />);
    expect(baseElement).toBeTruthy();
  });
});
