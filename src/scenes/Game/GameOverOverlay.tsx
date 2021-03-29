import React, {
  useCallback, useContext, useLayoutEffect, useRef,
} from 'react';
import {
  Box, Typography, makeStyles, RootRef,
} from '@material-ui/core';
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
    background: 'rgba(0, 0, 0, 0.80)',
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
    color: theme.palette.warning.main,
  },
  navigationButton: {
    marginTop: theme.spacing(1),
  },
}));

export const GameOverOverlay: React.FC = () => {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);
  const { playerNames } = useContext(SettingsContext);
  const { winner, restartGame } = useContext(GameContext);

  const startCongratsConfetti = useCallback(() => {
    const confettiFrequency = 20;
    const confettiColors = ['#EF2964', '#00C09D', '#2D87B0', '#48485E', '#EFFF1D'];
    const confettiAnimations = ['slow', 'medium', 'fast'];
    const confettiInterval = setInterval(() => {
      if (containerRef && containerRef.current) {
        const confettiEl = document.createElement('div');
        const confettiSize = `${Math.floor(Math.random() * 3) + 7}px`;
        const confettiBackground = confettiColors[
          Math.floor(Math.random() * confettiColors.length)
        ];
        const confettiLeft = `${Math.floor(Math.random() * containerRef.current.offsetWidth)}px`;
        const confettiAnimation = confettiAnimations[
          Math.floor(Math.random() * confettiAnimations.length)
        ];

        confettiEl.classList.add('confetti', `confetti--animation-${confettiAnimation}`);
        confettiEl.style.left = confettiLeft;
        confettiEl.style.width = confettiSize;
        confettiEl.style.height = confettiSize;
        confettiEl.style.backgroundColor = confettiBackground;

        setTimeout(() => {
          if (confettiEl && confettiEl.parentNode) confettiEl.parentNode.removeChild(confettiEl);
        }, 3000);

        containerRef.current.appendChild(confettiEl);
      } else {
        clearInterval(confettiInterval);
      }
    }, 1000 / confettiFrequency);
  }, [containerRef.current]);

  useLayoutEffect(() => {
    if (winner) {
      startCongratsConfetti();
    }
  }, [startCongratsConfetti]);

  return (
    <RootRef rootRef={containerRef}>
      <Box className={classes.root}>
        <Box className={classes.overlayContent}>
          {
            winner === null ? (
              <>
                <Typography variant="h3" className={classes.endGameLabel}>
                  Draw!
                </Typography>
                <Typography variant="h6" className={classes.endGameLabel}>
                  You both scored the same
                </Typography>
              </>
            ) : (
              <Box className={classes.gameTurn}>
                <Tile className={classes.winnerTile} size={34} value={winner} />
                <Typography variant="h4" className={classes.endGameLabel}>
                  {`Congratulations, ${playerNames[winner] || winner} won!`}
                </Typography>
              </Box>
            )
          }
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
    </RootRef>
  );
};
