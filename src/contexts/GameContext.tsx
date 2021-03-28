import React, { useContext, useState } from "react"
import { clone } from "lodash-es";
import { Players } from "../constants"
import { SettingsContext } from "./SettingsContext";

interface IDefaultGameState {
  turn: Players;
}

interface IState extends IDefaultGameState {
  squares: Players[];
}

interface IContextProps extends IState {
  performTurn: (index: number) => void;
  restartGame: () => void;
}

export const GameContext = React.createContext({} as IContextProps);

const defaultGameState: IDefaultGameState = {
  turn: Players.PLAYER_1,
}

export const GameContextProvider: React.FC = ({ children }) => {
  const { boardSize } = useContext(SettingsContext);
  const [state, setState] = useState<IState>({
    ...defaultGameState,
    squares: Array.from(new Array(boardSize * boardSize)),
  });

  const toggleTurn = (turn: Players): Players => {
    if (turn === Players.PLAYER_1) {
      return Players.PLAYER_2
    } else {
      return Players.PLAYER_1
    }
  }

  /**
   * Performs player move, e.g. on clicking the tile
   * @param index put current player's move in this position
   */
  const performTurn = (index: number) => {
    setState(state => {
      if (!state.squares[index]) {
        const tempSquares = clone(state.squares);
        tempSquares[index] = state.turn;
        return {
          ...state,
          squares: tempSquares,
          turn: toggleTurn(state.turn),
        }
      }
      return state
    })
  }

  const restartGame = () => {
    setState(state => ({
      ...state,
      ...defaultGameState,
      squares: Array.from(new Array(boardSize * boardSize)),
    }));
  }

  return <GameContext.Provider
    value={{
      ...state,
      performTurn,
      restartGame,
    }}
  >
    {children}
  </GameContext.Provider>
}
