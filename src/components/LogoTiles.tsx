import {
  Box, makeStyles, Theme, Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { Players } from '../constants';
import { PlayerColorSchemeType, SettingsContext } from '../contexts';
import { getLabel } from '../utils';
import { Tile } from './Tile';

interface IAnimationLogoProps {
  animate?: boolean;
  size?: number;
  colorScheme?: PlayerColorSchemeType;
  hideTitle?: boolean;
}

const useStyles = makeStyles<Theme, { animate?: boolean; size: number }>((theme) => ({
  root: ({ animate, size }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: Math.sqrt(2 * size * size),
    width: animate ? '100%' : 'auto',
    [theme.breakpoints.down('sm')]: {
      width: animate ? '100vw' : 'auto',
    },
  }),
  leftTile: ({ animate }) => ({
    position: animate ? 'absolute' : 'initial',
    animation: 'rollToRight',
    animationDuration: animate ? '1.1s' : '0',
    animationFillMode: 'forwards',
  }),
  rightTile: ({ animate }) => ({
    position: animate ? 'absolute' : 'initial',
    animation: 'rollToLeft',
    animationDuration: animate ? '1s' : '0',
    animationFillMode: 'forwards',
  }),
}));

export const LogoTiles: React.FC<IAnimationLogoProps> = ({
  animate, colorScheme, size = 80, hideTitle = false,
}) => {
  const classes = useStyles({ animate, size });
  const { playerColorScheme } = useContext(SettingsContext);
  return (
    <Box>
      <Box className={classes.root}>
        <Tile
          size={size}
          className={classes.rightTile}
          color={colorScheme ? colorScheme[Players.PLAYER_2] : playerColorScheme[Players.PLAYER_2]}
        />
        <Tile
          size={size}
          className={classes.leftTile}
          color={colorScheme ? colorScheme[Players.PLAYER_1] : playerColorScheme[Players.PLAYER_1]}
        />
      </Box>
      {!hideTitle && (
        <Box mb={2}>
          <Typography align="center" variant="h3">
            {getLabel('logo')}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
