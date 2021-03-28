import React, { useContext, useMemo } from "react";
import { Paper, makeStyles, Theme } from "@material-ui/core";
import { Players } from "../constants";
import { useMediaDown } from "../utils";
import { SettingsContext } from "../contexts";

interface ITileProps {
  index?: number;
  size?: number;
  value?: Players;
  onClick?: (index: number) => void;
  className?: string;
}

const useStyles = makeStyles<Theme, { tileSize: number; }>((theme) => ({
  paper: ({ tileSize }) => ({
    height: tileSize,
    width: tileSize,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '&.Player1': {
      backgroundColor: theme.palette.success.main,
    },
    '&.Player2': {
      backgroundColor: theme.palette.error.main,
    }
  }),
}));

const getSquareClassName = (value?: Players) => {
  if (value === Players.PLAYER_1) {
    return 'Player1'
  } else if (value === Players.PLAYER_2) {
    return 'Player2'
  }
  return ''
}

export const Tile: React.FC<ITileProps> = ({ index, size, value, onClick, className }) => {
  const { boardSize } = useContext(SettingsContext);
  const isMobileScreen = useMediaDown('xs');
  const isSmallMobileScreen = useMediaDown(345);
  const tileSize = useMemo(
    () => size || (isMobileScreen ? isSmallMobileScreen ? 245 / boardSize : 300 / boardSize : 530 / boardSize),
    [size, isMobileScreen, isSmallMobileScreen, boardSize]
  )

  const classes = useStyles({ tileSize });

  const handleClick = () => {
    onClick && index && onClick(index)
  }
  return (
    <Paper onClick={handleClick} className={`${classes.paper} ${getSquareClassName(value)} ${className}`}></Paper>
  )
}