import React, { useContext } from 'react';
import { Box, makeStyles, Theme } from '@material-ui/core';
import { Board, Menu, Settings, Instructions } from './scenes';
import { Route } from 'react-router';
import { SettingsContext } from './contexts';
import { GameOptions } from './scenes/GameOptions';
import { ROUTES } from './constants'

const useStyles = makeStyles<Theme, { backgroundColor: string }>((theme) => ({
  mainContainer: ({ backgroundColor }) => ({
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor,
  })
}));

const Main: React.FC = () => {
  const { backgroundColor } = useContext(SettingsContext);
  const classes = useStyles({ backgroundColor });

  return (
    <Box className={classes.mainContainer}>
      <Route exact path={ROUTES.MENU} component={Menu}/>
      <Route exact path={ROUTES.GAME_OPTIONS} component={GameOptions}/>
      <Route exact path={ROUTES.GAME} component={Board}/>
      <Route exact path={ROUTES.SETTINGS} component={Settings}/>
      <Route exact path={ROUTES.INSTRUCTIONS} component={Instructions}/>
    </Box>
  );
}

export default Main;
