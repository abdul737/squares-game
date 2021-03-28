import React, { useCallback, useContext, useEffect } from 'react';
import { clone } from 'lodash-es';
import { Players } from '../constants';
import { PlayerNamesType, SettingsContext } from './SettingsContext';
import { useAutoSavedState } from '../Hooks';

interface IDefaultGameState {
  turn: Players;
  isGameOver: boolean;
  winner: Players | null;
  maxScores: { [key in Players]: number };
}

interface IGameContextState extends IDefaultGameState {
  squares: Players[];
}

interface IGameContextValue extends IGameContextState {
  startNewGame: (boardSize: number, playerNames: PlayerNamesType) => void;
  restartGame: () => void;
  performTurn: (index: number) => void;
}

export const GameContext = React.createContext({} as IGameContextValue);

const defaultGameState: IDefaultGameState = {
  turn: Players.PLAYER_1,
  isGameOver: false,
  winner: null,
  maxScores: {
    [Players.PLAYER_1]: 0,
    [Players.PLAYER_2]: 0,
  },
};

export const GameContextProvider: React.FC = ({ children }) => {
  const { boardSize, setBoardSize, setPlayerNames } = useContext(SettingsContext);
  const [state, setState] = useAutoSavedState<IGameContextState>(
    {
      ...defaultGameState,
      squares: Array.from(new Array(boardSize * boardSize)),
    },
    'GameContext',
  );

  /**
   * Counts connected squares of the given player, starting from index i
   */
  const getPlayerSquares = useCallback(
    (player: Players, squares: any[], i = 0, usedIndexes: number[] = []): number => {
      if (!squares[i] || squares[i] !== player || usedIndexes.includes(i)) {
        return 0;
      }
      usedIndexes.push(i);
      return (
        1
        + ((i + 1) % boardSize === 0 ? 0 : getPlayerSquares(player, squares, i + 1, usedIndexes))
        + (i % boardSize === 0 ? 0 : getPlayerSquares(player, squares, i - 1, usedIndexes))
        + getPlayerSquares(player, squares, i - boardSize, usedIndexes)
        + getPlayerSquares(player, squares, i + boardSize, usedIndexes)
      );
    },
    [boardSize],
  );

  /**
   * Finds winner or draw
   */
  const getWinner = useCallback((): Players | null => {
    if (state.maxScores[Players.PLAYER_1] > state.maxScores[Players.PLAYER_2]) {
      return Players.PLAYER_1;
    }
    if (state.maxScores[Players.PLAYER_2] > state.maxScores[Players.PLAYER_1]) {
      return Players.PLAYER_2;
    }
    return null;
  }, [state.maxScores]);

  /**
   * Updates maximum scores object for each player, after each move
   */
  useEffect(() => {
    const maxScores = {
      [Players.PLAYER_1]: 0,
      [Players.PLAYER_2]: 0,
    };
    state.squares.forEach((player, startIndex) => {
      const count = getPlayerSquares(player, state.squares, startIndex);
      if (count > maxScores[player]) {
        maxScores[player] = count;
      }
    });
    setState((state) => ({
      ...state,
      maxScores,
    }));
  }, [state.squares, setState, getPlayerSquares]);

  useEffect(() => {
    if (state.squares.every((square) => !!square)) {
      setState((state) => ({
        ...state,
        isGameOver: true,
        winner: getWinner(),
      }));
    }
  }, [state.squares, setState, getWinner]);

  const toggleTurn = (turn: Players): Players => {
    if (turn === Players.PLAYER_1) {
      return Players.PLAYER_2;
    }
    return Players.PLAYER_1;
  };

  /**
   * Performs player move, e.g. on clicking the tile
   * @param index put current player's move in this position
   */
  const performTurn = (index: number) => {
    setState((state) => {
      if (!state.squares[index]) {
        const tempSquares = clone(state.squares);
        tempSquares[index] = state.turn;
        return {
          ...state,
          squares: tempSquares,
          turn: toggleTurn(state.turn),
        };
      }
      return state;
    });
  };

  const startNewGame = async (boardSize: number, playerNames: PlayerNamesType) => {
    setBoardSize(boardSize);
    setPlayerNames(playerNames);
    setState((state) => ({
      ...state,
      ...defaultGameState,
      squares: Array.from(new Array(boardSize * boardSize)),
    }));
  };

  const restartGame = () => {
    setState((state) => ({
      ...state,
      ...defaultGameState,
      squares: Array.from(new Array(boardSize * boardSize)),
    }));
  };

  return (
    <GameContext.Provider
      value={{
        ...state,
        startNewGame,
        restartGame,
        performTurn,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
