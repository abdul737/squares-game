import React, { useContext, useMemo } from 'react';
import { Paper, makeStyles, Theme } from '@material-ui/core';
import { Players } from '../constants';
import { useMediaDown } from '../utils';
import { SettingsContext } from '../contexts';

interface ITileProps {
  index?: number;
  value?: Players;
  onClick?: (index: number) => void;
  size?: number;
  color?: string;
  className?: string;
  disableHoverAnimation?: boolean;
}

interface IUseStylesProps {
  tileSize: number;
  tileColor?: string;
  disableHoverAnimation?: boolean;
}

const useStyles = makeStyles<Theme, IUseStylesProps>((theme) => ({
  paper: ({ tileSize, tileColor, disableHoverAnimation }) => ({
    height: tileSize,
    width: tileSize,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: tileColor || theme.palette.common.white,
    '&:hover, &:active': disableHoverAnimation ? {} : {
      animationDuration: '200ms',
      animationName: tileColor ? '' : 'emptyTileHover',
      animationFillMode: 'forwards',
    },
  }),
}));

export const Tile: React.FC<ITileProps> = ({
  index,
  size,
  value,
  onClick,
  className = '',
  color,
  disableHoverAnimation,
}) => {
  const { boardSize, playerColorScheme } = useContext(SettingsContext);
  const isMobileScreen = useMediaDown('xs');
  const isSmallMobileScreen = useMediaDown(345);
  const mobileTileSize = useMemo(
    () => (isSmallMobileScreen ? 245 / boardSize : 300 / boardSize),
    [isSmallMobileScreen, boardSize],
  );
  const tileSize = useMemo(
    () => size || (isMobileScreen ? mobileTileSize : 530 / boardSize),
    [size, isMobileScreen, isSmallMobileScreen, boardSize],
  );

  const classes = useStyles({
    tileSize,
    tileColor: color || (value && playerColorScheme[value]),
    disableHoverAnimation,
  });

  const handleClick = () => {
    if (onClick && index !== undefined) onClick(index);
  };
  return <Paper onClick={handleClick} className={`${classes.paper} ${className}`} />;
};
