import { render, screen } from '@testing-library/react';

describe('Example', () => {
  it('example test', () => {
    render(
      <div>
        <h1>EXAMPLE</h1>
      </div>
    );

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('EXAMPLE');
  });
});
