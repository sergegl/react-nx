import { render } from '@testing-library/react';

import AvailableMeals from './available-meals';

describe('AvailableMeals', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AvailableMeals />);
    expect(baseElement).toBeTruthy();
  });
});
