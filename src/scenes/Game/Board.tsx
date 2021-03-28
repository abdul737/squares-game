import React, { useContext, useMemo } from 'react';
import { Box, makeStyles, Theme } from '@material-ui/core';
import { Tile } from '../../components';
import { Players } from '../../constants';
import { SettingsContext, GameContext } from '../../contexts';
import { useMediaDown } from '../../utils';

const useStyles = makeStyles<Theme, { tileMargin: number }>((theme) => ({
  tileRow: {
    display: 'flex',
  },
  tileContainer: ({ tileMargin }) => ({
    margin: theme.spacing(tileMargin),
  }),
}));

export const Board: React.FC = () => {
  const { boardSize } = useContext(SettingsContext);
  const { squares, performTurn } = useContext(GameContext);
  const isMobileScreen = useMediaDown('xs');
  const classes = useStyles({ tileMargin: isMobileScreen ? 0.25 : 0.5 });

  const tiles = useMemo(
    () => squares.reduce<Players[][]>((store, value, index) => {
      const newStore = store;
      const rowIndex = Math.floor(index / boardSize);
      if (!newStore[rowIndex]) {
        newStore[rowIndex] = [value];
      } else {
        newStore[rowIndex].push(value);
      }
      return newStore;
    }, []),
    [squares, boardSize],
  );

  return (
    <Box>
      {tiles.map((row, i) => (
        <Box key={i} className={classes.tileRow}>
          {row.map((value, j) => (
            <Box key={`${i}_${j}`} className={classes.tileContainer}>
              <Tile key={`${i}-${j}`} index={i * boardSize + j} value={value} onClick={performTurn} />
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};
