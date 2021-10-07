import { render } from '@testing-library/react';

import MealItemForm from './meal-item-form';

describe('MealItemForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MealItemForm />);
    expect(baseElement).toBeTruthy();
  });
});
