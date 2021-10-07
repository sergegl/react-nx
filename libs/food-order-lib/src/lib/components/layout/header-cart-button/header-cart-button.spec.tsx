import { render } from '@testing-library/react';

import HeaderCartButton from './header-cart-button';

describe('HeaderCartButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderCartButton />);
    expect(baseElement).toBeTruthy();
  });
});
