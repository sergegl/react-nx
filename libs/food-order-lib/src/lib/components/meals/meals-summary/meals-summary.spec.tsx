import { render } from '@testing-library/react';

import MealsSummary from './meals-summary';

describe('MealsSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MealsSummary />);
    expect(baseElement).toBeTruthy();
  });
});
