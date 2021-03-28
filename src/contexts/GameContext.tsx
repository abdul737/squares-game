import React, { useContext } from "react"
import { clone } from "lodash-es";
import { Players } from "../constants"
import { SettingsContext } from "./SettingsContext";
import { useAutoSavedState } from "../Hooks";

interface IDefaultGameState {
  turn: Players;
}

interface IGameContextState extends IDefaultGameState {
  squares: Players[];
}

interface IGameContextValue extends IGameContextState {
  performTurn: (index: number) => void;
  restartGame: () => void;
}

export const GameContext = React.createContext({} as IGameContextValue);

const defaultGameState: IDefaultGameState = {
  turn: Players.PLAYER_1,
}

export const GameContextProvider: React.FC = ({ children }) => {
  const { boardSize } = useContext(SettingsContext);
  const [state, setState] = useAutoSavedState<IGameContextState>({
    ...defaultGameState,
    squares: Array.from(new Array(boardSize * boardSize)),
  }, 'GameContext');

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
