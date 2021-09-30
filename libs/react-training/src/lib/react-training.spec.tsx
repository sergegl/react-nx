import { render } from '@testing-library/react';

import ReactTraining from './react-training';

describe('ReactTraining', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactTraining />);
    expect(baseElement).toBeTruthy();
  });
});
