import { useTheme } from "@material-ui/core";
import React, { useCallback } from "react"
import { BOARD_SIZES, Players } from "../constants";
import { useAutoSavedState } from "../Hooks";

type backgroundStyleType = 'primary' | 'default'

interface ISettingsContextState {
  backgroundColor: string;
  boardSize: number;
  playerNames: { [key in Players]?: string; }
}

interface ISettingsContextValue extends ISettingsContextState {
  setBackgroundStyle: (backgroundStyle?: backgroundStyleType) => void;
  setBoardSize: (value: number) => void;
  setPlayerName: (player: Players, name: string) => void;
}

export const SettingsContext = React.createContext({} as ISettingsContextValue);

export const SettingsContextProvider: React.FC = ({ children }) => {
  const theme = useTheme();
  const [state, setState] = useAutoSavedState<ISettingsContextState>({
    backgroundColor: '',
    boardSize: BOARD_SIZES[1].value,
    playerNames: {},
  }, 'SettingsContext');

  const setBackgroundStyle = useCallback((backgroundStyle?: backgroundStyleType) => {
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

  const setPlayerName = (player: Players, name: string) =>{
    setState(state => ({
      ...state,
      playerNames: {
        ...state.playerNames,
        [player]: name,
      },
    }));
  }

  return <SettingsContext.Provider value={{
    ...state,
    setBackgroundStyle,
    setBoardSize,
    setPlayerName,
    }}>
    {children}
  </SettingsContext.Provider>
}
