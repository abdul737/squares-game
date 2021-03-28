import { useTheme } from "@material-ui/core";
import React, { useState } from "react"
import { BOARD_SIZES, Players } from "../constants";

type backgroundStyleType = 'primary' | 'default'

interface IState {
  backgroundColor: string;
  boardSize: number;
  playerNames: { [key in Players]?: string; }
  setBackgroundStyle: (backgroundStyle?: backgroundStyleType) => void;
  setBoardSize: (value: number) => void;
  setPlayerName: (player: Players, name: string) => void;
}

export const SettingsContext = React.createContext({} as IState);

export const SettingsContextProvider: React.FC = ({ children }) => {
  const theme = useTheme();
  const [state, setState] = useState<IState>({
    backgroundColor: '',
    boardSize: BOARD_SIZES[1].value,
    playerNames: {},
    setBackgroundStyle: (backgroundStyle) => {
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
    },
    setBoardSize: (boardSize) =>
      setState(state => ({
        ...state,
        boardSize,
      })),
    setPlayerName: (player, name) =>{
      setState(state => ({
        ...state,
        playerNames: {
          ...state.playerNames,
          [player]: name,
        },
      }));
    },
  });

  return <SettingsContext.Provider value={state}>
    {children}
  </SettingsContext.Provider>
}
