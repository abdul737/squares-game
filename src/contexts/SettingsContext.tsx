import { useTheme } from "@material-ui/core";
import React, { useCallback } from "react"
import { BOARD_SIZES, Players, PLAYER_COLOR_SCHEMES } from "../constants";
import { useAutoSavedState } from "../Hooks";

type BackgroundStyleType = 'primary' | 'default'

export type PlayerNamesType = { [key in Players]?: string; }
export type PlayerColorSchemeType = { [key in Players]: string; }

interface ISettingsContextState {
  backgroundColor: string;
  boardSize: number;
  playerNames: PlayerNamesType;
  playerColorScheme: PlayerColorSchemeType;
}

interface ISettingsContextValue extends ISettingsContextState {
  setBackgroundStyle: (backgroundStyle?: BackgroundStyleType) => void;
  setBoardSize: (value: number) => void;
  setPlayerNames: (playerNames: PlayerNamesType) => void;
  setPlayerColorScheme: (playerColorScheme: PlayerColorSchemeType) => void;
}

export const defaultSettings = {
  backgroundColor: '',
  boardSize: BOARD_SIZES[1].value,
  playerNames: {
    [Players.PLAYER_1]: '',
    [Players.PLAYER_2]: '',
  },
  playerColorScheme: PLAYER_COLOR_SCHEMES[0],
}

export const SettingsContext = React.createContext({} as ISettingsContextValue);

export const SettingsContextProvider: React.FC = ({ children }) => {
  const theme = useTheme();
  const [state, setState] = useAutoSavedState<ISettingsContextState>(defaultSettings, 'SettingsContext');

  const setBackgroundStyle = useCallback((backgroundStyle?: BackgroundStyleType) => {
    let backgroundColor: string
    switch(backgroundStyle) {
      case 'primary':
        backgroundColor = theme.palette.primary.main;
        break;
      case 'default':
      default:
        backgroundColor = theme.palette.grey[400]
    }
    setState(state => ({
      ...state,
      backgroundColor,
    }))
  }, [setState, theme.palette.primary.main, theme.palette.grey])

  const setBoardSize = (boardSize: number) =>
    setState(state => ({
      ...state,
      boardSize,
    }));

  const setPlayerNames = (playerNames: PlayerNamesType) => {
    setState(state => ({
      ...state,
      playerNames,
    }));
  }

  const setPlayerColorScheme = (playerColorScheme: PlayerColorSchemeType) => {
    setState(state => ({
      ...state,
      playerColorScheme,
    }));
  }

  return <SettingsContext.Provider value={{
    ...state,
    setBackgroundStyle,
    setBoardSize,
    setPlayerNames,
    setPlayerColorScheme,
  }}>
    {children}
  </SettingsContext.Provider>
}
