import React, { useContext, useMemo } from "react";
import { Paper, makeStyles, Theme } from "@material-ui/core";
import { Players } from "../constants";
import { useMediaDown } from "../utils";
import { GameContext, SettingsContext } from "../contexts";

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
    },
    '&.empty:hover': {
      animationDuration: '200ms',
      animationName: 'emptyTileHover',
      animationFillMode: 'forwards',
      '&.turn-Player1': {
        backgroundColor: theme.palette.success.main,
      },
      '&.turn-Player2': {
        backgroundColor: theme.palette.error.main,
      },
    },
  }),
}));

const getSquareClassName = (value?: Players) => value ? value.replace(/ /g,'') : 'empty'

export const Tile: React.FC<ITileProps> = ({ index, size, value, onClick, className }) => {
  const { boardSize } = useContext(SettingsContext);
  const { turn } = useContext(GameContext);
  const isMobileScreen = useMediaDown('xs');
  const isSmallMobileScreen = useMediaDown(345);
  const tileSize = useMemo(
    () => size || (isMobileScreen ? isSmallMobileScreen ? 245 / boardSize : 300 / boardSize : 530 / boardSize),
    [size, isMobileScreen, isSmallMobileScreen, boardSize]
  )

  const classes = useStyles({ tileSize });

  const handleClick = () => {
    onClick && index !== undefined && onClick(index)
  }
  return (
    <Paper onClick={handleClick} className={`${classes.paper} ${getSquareClassName(value)} turn-${turn.replace(/ /g,'')} ${className}`}></Paper>
  )
}