import { Box, makeStyles } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { LogoTiles, NavigationButton } from '../../components';
import { Players, ROUTES } from '../../constants';
import {
  GameContext, SettingsContext, PlayerNamesType, defaultSettings,
} from '../../contexts';
import { getLabel } from '../../utils';
import { ChooseBoardSize } from './ChooseBoardSize';
import { PlayerNames } from './PlayerNames';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttons: {
    display: 'flex',
    margin: theme.spacing(1),
    justifyContent: 'center',
    flexWrap: 'wrap-reverse',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export const GameOptions: React.FC = () => {
  const { setBackgroundStyle, playerNames: savedPlayerNames } = useContext(SettingsContext);
  const { startNewGame } = useContext(GameContext);
  const classes = useStyles();
  const [playerNames, setPlayerNames] = useState<PlayerNamesType>(savedPlayerNames);
  const [boardSize, setBoardSize] = useState(defaultSettings.boardSize);

  useEffect(() => {
    setBackgroundStyle('default');
  }, [setBackgroundStyle]);

  const setPlayerName = (player: Players, name: string) => {
    setPlayerNames((prePlayerNames) => ({
      ...prePlayerNames,
      [player]: name,
    }));
  };

  const handleStartGameClick = () => {
    startNewGame(boardSize, playerNames);
  };

  return (
    <Box className={classes.root}>
      <LogoTiles />
      <ChooseBoardSize boardSize={boardSize} setBoardSize={setBoardSize} />
      <PlayerNames playerNames={playerNames} setPlayerName={setPlayerName} />
      <Box className={classes.buttons}>
        <Box className={classes.button}>
          <NavigationButton path={ROUTES.MENU}>{getLabel('cancel')}</NavigationButton>
        </Box>
        <Box className={classes.button}>
          <NavigationButton onClick={handleStartGameClick} path={ROUTES.GAME} color="primary">
            {getLabel('startGame')}
          </NavigationButton>
        </Box>
      </Box>
    </Box>
  );
};
