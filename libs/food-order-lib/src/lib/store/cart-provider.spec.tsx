import { render } from '@testing-library/react';

import CartProvider from './cart-provider';

describe('CartProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartProvider />);
    expect(baseElement).toBeTruthy();
  });
});
