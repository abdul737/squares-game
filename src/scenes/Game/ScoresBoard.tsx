import React, { useContext } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { Players } from '../../constants';
import { GameContext, SettingsContext } from '../../contexts';
import { getLabel } from '../../utils';

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.common.white,
  },
}));

export const ScoresBoard: React.FC = () => {
  const classes = useStyles();
  const { playerNames } = useContext(SettingsContext);
  const { maxScores } = useContext(GameContext);

  return (
    <Box p={1} display="flex" justifyContent="space-between">
      <Box>
        <Typography variant="h6" className={classes.text}>
          {playerNames[Players.PLAYER_1] || Players.PLAYER_1}
        </Typography>
        <Typography className={classes.text}>
          {getLabel('score')}
          :
          {maxScores[Players.PLAYER_1]}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" className={classes.text} align="right">
          {playerNames[Players.PLAYER_2] || Players.PLAYER_1}
        </Typography>
        <Typography className={classes.text} align="right">
          {getLabel('score')}
          :
          {maxScores[Players.PLAYER_2]}
        </Typography>
      </Box>
    </Box>
  );
};
