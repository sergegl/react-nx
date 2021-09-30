import { render } from '@testing-library/react';

import ChartBar from './chart-bar';

describe('ChartBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChartBar />);
    expect(baseElement).toBeTruthy();
  });
});
