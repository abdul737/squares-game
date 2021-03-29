import React from 'react';
import { render, screen } from '@testing-library/react';
import { Providers } from './Providers';
import Main from './Main';

test('Renders Squares Game logo text', () => {
  render(<Providers><Main /></Providers>);
  const logoText = screen.getByTestId('gameLogo');
  expect(logoText).toBeTruthy();
});

test('Opens the game options scene', () => {
  render(<Providers><Main /></Providers>);
  const resumeGameButton = screen.queryByTestId('resumeGameButton');
  const startGameButton = screen.getByTestId('startGameButton');
  expect(resumeGameButton).toBeFalsy();
  startGameButton.click();
  const gameOptionsScene = screen.findByTestId('gameOptionsScene');
  expect(gameOptionsScene).toBeTruthy();
});
