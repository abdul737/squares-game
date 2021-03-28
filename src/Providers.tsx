import React from "react";
import { HashRouter as Router } from 'react-router-dom'
import { GameContextProvider, SettingsContextProvider } from "./contexts";

export const Providers: React.FC = ({ children }) => {
  return (
    <Router>
      <SettingsContextProvider>
        <GameContextProvider>
          {children}
        </GameContextProvider>
      </SettingsContextProvider>
    </Router>
  )
}