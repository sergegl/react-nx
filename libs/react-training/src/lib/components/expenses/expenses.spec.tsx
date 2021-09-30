import { render } from '@testing-library/react';

import Expenses from './expenses';

describe('Expenses', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Expenses />);
    expect(baseElement).toBeTruthy();
  });
});
