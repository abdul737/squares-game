import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { SettingsContextProvider, GameContextProvider } from './contexts';

export const Providers: React.FC<{ children: any }> = ({ children }) => (
  <Router>
    <SettingsContextProvider>
      <GameContextProvider>{children}</GameContextProvider>
    </SettingsContextProvider>
  </Router>
);
