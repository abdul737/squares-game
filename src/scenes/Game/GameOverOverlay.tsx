import React, { useContext } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { NavigationButton, Tile } from '../../components';
import { ROUTES } from '../../constants';
import { GameContext, SettingsContext } from '../../contexts';
import { getLabel } from '../../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 5,
    background: 'radial-gradient(rgba(0, 0, 0, 0.65), transparent)',
  },
  overlayContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gameTurn: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  winnerTile: {
    marginRight: theme.spacing(2),
  },
  endGameLabel: {
    color: theme.palette.warning.light,
  },
  navigationButton: {
    marginTop: theme.spacing(1),
  },
}));

export const GameOverOverlay: React.FC = () => {
  const classes = useStyles();
  const { playerNames } = useContext(SettingsContext);
  const { winner, restartGame } = useContext(GameContext);

  return (
    <Box className={classes.root}>
      <Box className={classes.overlayContent}>
        <Box className={classes.gameTurn}>
          {winner !== null && <Tile className={classes.winnerTile} size={34} value={winner} />}
          <Typography variant="h4" className={classes.endGameLabel}>
            {winner !== null ? `${playerNames[winner] || winner} won!` : 'Game over, Draw'}
          </Typography>
        </Box>
        <Box className={classes.navigationButton}>
          <NavigationButton onClick={restartGame} color="primary">
            {getLabel('playAgain')}
          </NavigationButton>
        </Box>
        <Box className={classes.navigationButton}>
          <NavigationButton path={ROUTES.MENU}>{getLabel('menu')}</NavigationButton>
        </Box>
      </Box>
    </Box>
  );
};
