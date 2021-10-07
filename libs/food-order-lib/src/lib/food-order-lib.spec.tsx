import { render } from '@testing-library/react';

import FoodOrderLib from './food-order-lib';

describe('FoodOrderLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FoodOrderLib />);
    expect(baseElement).toBeTruthy();
  });
});
