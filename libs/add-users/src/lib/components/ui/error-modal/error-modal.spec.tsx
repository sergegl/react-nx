import { render } from '@testing-library/react';

import ErrorModal from './error-modal';

describe('ErrorModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorModal />);
    expect(baseElement).toBeTruthy();
  });
});
