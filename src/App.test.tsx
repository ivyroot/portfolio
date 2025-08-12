import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header title', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /ivyroot/i })
  ).toBeInTheDocument();
});
