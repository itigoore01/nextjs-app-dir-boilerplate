import Home from '@/app/page';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('renders heading', () => {
  render(<Home />);

  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading.textContent).toBe('Home');
});
