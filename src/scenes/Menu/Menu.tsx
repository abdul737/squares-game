import React, { useContext, useEffect, useMemo } from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { LogoTiles, NavigationButton } from '../../components';
import { ROUTES } from '../../constants';
import { getLabel } from '../../utils';
import { GameContext, SettingsContext } from '../../contexts';

const useStyles = makeStyles((theme) => ({
  menu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  menuItem: {
    marginBottom: theme.spacing(1),
  },
}));

export const Menu: React.FC = () => {
  const { setBackgroundStyle } = useContext(SettingsContext);
  const { squares } = useContext(GameContext);
  const classes = useStyles();
  const canResume = useMemo(() => squares.some((square) => square), [squares]);

  useEffect(() => {
    setBackgroundStyle('default');
  }, [setBackgroundStyle]);

  return (
    <Box className={classes.menu}>
      <LogoTiles animate />
      {canResume && (
        <Box className={classes.menuItem} data-testid="resumeGameButton">
          <NavigationButton path={ROUTES.GAME} color="primary">
            {getLabel('resumeGame')}
          </NavigationButton>
        </Box>
      )}
      <Box className={classes.menuItem} data-testid="startGameButton">
        <NavigationButton path={ROUTES.GAME_OPTIONS} color={canResume ? 'secondary' : 'primary'}>
          {getLabel('startGame')}
        </NavigationButton>
      </Box>
      <Box className={classes.menuItem}>
        <NavigationButton path={ROUTES.SETTINGS}>{getLabel('settings')}</NavigationButton>
      </Box>
      <Box className={classes.menuItem}>
        <NavigationButton path={ROUTES.INSTRUCTIONS}>{getLabel('instructions')}</NavigationButton>
      </Box>
    </Box>
  );
};
