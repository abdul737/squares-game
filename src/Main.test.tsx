import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

test('Renders Squares Game logo text', () => {
  render(<Main />);
  const logoText = screen.getByText(/Squares Game/i);
  expect(logoText).toBeInTheDocument();
});
