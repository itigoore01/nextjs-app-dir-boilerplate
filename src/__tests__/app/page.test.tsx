import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

test('renders heading', () => {
  render(<Home />);

  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading.textContent).toBe('Home');
});
