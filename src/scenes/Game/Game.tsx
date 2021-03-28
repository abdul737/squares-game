import React, { useContext, useEffect } from "react";
import { makeStyles, Theme, Typography, Box } from '@material-ui/core'
import { ROUTES } from "../../constants";
import { NavigationButton, Tile } from "../../components";
import { GameContext, SettingsContext } from "../../contexts";
import { getLabel, useMediaDown } from "../../utils";
import { GameOverOverlay } from "./GameOverOverlay";
import { Board } from './Board';
import { ScoresBoard } from "./ScoresBoard";

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
}));

export const Game: React.FC = () => {
  const { setBackgroundStyle, playerNames } = useContext(SettingsContext);
  const { turn, isGameOver } = useContext(GameContext);
  const isMobileScreen = useMediaDown('xs');
  const classes = useStyles({ tileMargin: isMobileScreen ? 0.25 : 0.50 });

  useEffect(() => {
    setBackgroundStyle('primary');
  }, [setBackgroundStyle])

  return (
    <Box className={classes.root}>
      <Box className={classes.gameTurn}>
        <Tile className={classes.turnTile} size={34} value={turn}/>
        <Typography variant="h4" className={classes.turnLabel}>
          {`Turn: ${playerNames[turn] || turn}`}
        </Typography>
      </Box>
      <ScoresBoard/>
      <Board />
      { isGameOver && <GameOverOverlay /> }
      <Box className={classes.navigationButton}>
        <NavigationButton path={ROUTES.MENU}>{getLabel('menu')}</NavigationButton>
      </Box>
    </Box>
  )
}