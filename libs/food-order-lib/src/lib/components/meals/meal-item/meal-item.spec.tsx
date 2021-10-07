import { render } from '@testing-library/react';

import MealItem from './meal-item';

describe('MealItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MealItem />);
    expect(baseElement).toBeTruthy();
  });
});
