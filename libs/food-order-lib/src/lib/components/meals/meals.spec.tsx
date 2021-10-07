import { render } from '@testing-library/react';

import Meals from './meals';

describe('Meals', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Meals />);
    expect(baseElement).toBeTruthy();
  });
});
