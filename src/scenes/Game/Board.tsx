import React, { useContext, useMemo } from "react";
import { Box, makeStyles, Theme } from "@material-ui/core";
import { Tile } from "../../components";
import { Players } from "../../constants";
import { GameContext, SettingsContext } from "../../contexts";
import { useMediaDown } from "../../utils";

const useStyles = makeStyles<Theme, { tileMargin: number }>((theme) => ({
  tileRow: {
    display: 'flex'
  },
  tileContainer: ({ tileMargin }) => ({
    margin: theme.spacing(tileMargin),
  }),
}));

export const Board: React.FC = () => {
  const { boardSize } = useContext(SettingsContext);
  const { squares, performTurn } = useContext(GameContext);
  const isMobileScreen = useMediaDown('xs');
  const classes = useStyles({ tileMargin: isMobileScreen ? 0.25 : 0.50 });

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
    <Box>
      {
        tiles.map((row, i) => (
          <Box key={i} className={classes.tileRow}>
            {row.map((value, j) => (
              <Box key={j} className={classes.tileContainer}>
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
  )
}