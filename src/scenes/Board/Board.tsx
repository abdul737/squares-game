import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { makeStyles, Theme, Typography, Box } from '@material-ui/core'
import { Players, ROUTES } from "../../constants";
import { NavigationButton, Tile } from "../../components";
import { GameContext, SettingsContext } from "../../contexts";
import { getLabel, useMediaDown } from "../../utils";

const useStyles = makeStyles<Theme, { tileMargin: number }>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gameTurn: ({ tileMargin }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(tileMargin),
  }),
  turnTile: {
    marginRight: theme.spacing(2),
  },
  turnLabel: {
    color: theme.palette.primary.contrastText,
    '&.gameOver': {
      color: theme.palette.warning.light,
    },
  },
  navigationButton: ({ tileMargin }) => ({
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(tileMargin),
  }),
  tileRow: {
    display: 'flex'
  },
  tile: ({ tileMargin }) => ({
    margin: theme.spacing(tileMargin),
  }),
}));

export const Board: React.FC = () => {
  const { setBackgroundStyle, boardSize, playerNames } = useContext(SettingsContext);
  const { squares, turn, performTurn } = useContext(GameContext);
  const isMobileScreen = useMediaDown('xs');
  const classes = useStyles({ tileMargin: isMobileScreen ? 0.25 : 0.50 });
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState<Players | 'Draw'>('Draw')

  useEffect(() => {
    setBackgroundStyle('primary');
  }, [setBackgroundStyle])

  /**
   * Counts connected squares of the given player, starting from index i
   */
  const getPlayerSquares = useCallback(
    (player: Players, squares: any[], i: number = 0, usedIndexes: number[] = []): number => {
      if (squares[i] !== player || usedIndexes.includes(i)) {
        return 0;
      }
      usedIndexes.push(i)
      return 1 + ((i + 1) % boardSize === 0 ? 0: getPlayerSquares(player, squares, i + 1, usedIndexes))
        + ((i) % boardSize === 0 ? 0 : getPlayerSquares(player, squares, i - 1, usedIndexes))
        + getPlayerSquares(player, squares, i - boardSize, usedIndexes)
        + getPlayerSquares(player, squares, i + boardSize, usedIndexes)
    }
  , [boardSize]);

  /**
   * Finds winner or draw
   */
  const getWinner = useCallback((): Players | 'Draw' => {
    const max = {
      [Players.PLAYER_1]: 0,
      [Players.PLAYER_2]: 0,
    }
    squares.forEach((player, startIndex) => {
      const count = getPlayerSquares(player, squares, startIndex);
      if (count > max[player]) {
        max[player] = count;
      }
    })
    if (max[Players.PLAYER_1] > max[Players.PLAYER_2]) {
      return Players.PLAYER_1;
    } else if (max[Players.PLAYER_2] > max[Players.PLAYER_1]) {
      return Players.PLAYER_2;
    }
    return 'Draw'
  }, [squares, getPlayerSquares])

  useEffect(() => {
    if (squares.every(square => !!square)) {
      setWinner(getWinner())
      setIsGameOver(true)
    }
  }, [squares, getWinner])

  const tiles = useMemo(() => squares.reduce<Players[][]>(
    (store, value, index) => {
      const rowIndex = Math.floor(index/boardSize);
      if (!store[rowIndex]) {
        store[rowIndex] = [value]
      } else {
        store[rowIndex].push(value)
      }
      return store
    },
  []), [squares, boardSize])

  return (
    <Box className={classes.root}>
      <Box className={classes.gameTurn}>
        {
          isGameOver ?
            winner !== 'Draw' && <Tile className={classes.turnTile} size={34} value={winner}/>
            : <Tile className={classes.turnTile} size={34} value={turn}/>
        }
        <Typography variant="h4" className={`${classes.turnLabel} ${isGameOver && 'gameOver'}`}>
          {
            isGameOver ?
              winner !== 'Draw' ? `${playerNames[winner] || winner} won!` : 'Game over, Draw'
              : `Turn: ${playerNames[turn] || turn}`
          }
        </Typography>
      </Box>
      <Box>
        {
          tiles.map((row, i) => (
            <Box key={i} className={classes.tileRow}>
              {row.map((value, j) => (
                <Box key={j} className={classes.tile}>
                  <Tile
                    key={`${i}-${j}`}
                    index={i * boardSize + j}
                    value={value}
                    onClick={performTurn}
                  />
                </Box>
              ))}
            </Box>
          ))
        }
      </Box>
      <Box className={classes.navigationButton}>
        <NavigationButton path={ROUTES.MENU}>{getLabel('menu')}</NavigationButton>
      </Box>
    </Box>
  )
}