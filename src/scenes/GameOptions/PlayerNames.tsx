import React from 'react';
import { Box, makeStyles, TextField } from '@material-ui/core';
import { Players } from '../../constants';
import { PlayerNamesType } from '../../contexts';

interface IPlayerNamesProps {
  playerNames: PlayerNamesType;
  setPlayerName: (playerNames: Players, name: string) => void;
}

const useStyles = makeStyles((theme) => ({
  inputs: {
    display: 'flex',
    margin: theme.spacing(1),
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  settingsItem: {
    margin: theme.spacing(1),
  },
}));

export const PlayerNames: React.FC<IPlayerNamesProps> = ({ playerNames, setPlayerName }) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setPlayerName(name as Players, value);
  };

  return (
    <Box className={classes.inputs}>
      <Box className={classes.settingsItem}>
        <TextField
          name={Players.PLAYER_1}
          label={Players.PLAYER_1}
          variant="outlined"
          value={playerNames[Players.PLAYER_1]}
          onChange={handleChange}
        />
      </Box>
      <Box className={classes.settingsItem}>
        <TextField
          name={Players.PLAYER_2}
          label={Players.PLAYER_2}
          variant="outlined"
          value={playerNames[Players.PLAYER_2]}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};
