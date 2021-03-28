import { Box, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { NavigationButton } from "../../components";
import { ROUTES } from "../../constants";
import { GameContext, SettingsContext } from "../../contexts";
import { getLabel } from "../../utils";
import { ChooseBoardSize } from "./ChooseBoardSize";
import { PlayerNames } from "./PlayerNames";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
}))

export const GameOptions: React.FC = () => {
  const { setBackgroundStyle } = useContext(SettingsContext);
  const { restartGame } = useContext(GameContext)
  const classes = useStyles();

  useEffect(() => {
    setBackgroundStyle('default');
  }, [setBackgroundStyle])

  return (
    <Box className={classes.root}>
      <ChooseBoardSize />
      <PlayerNames />
      <Box className={classes.buttons}>
        <Box className={classes.button}>
          <NavigationButton path={ROUTES.MENU}>{getLabel('goBack')}</NavigationButton>
        </Box>
        <Box className={classes.button}>
          <NavigationButton onClick={restartGame} path={ROUTES.GAME} color="primary">{getLabel('startGame')}</NavigationButton>
        </Box>
      </Box>
    </Box>
  )
}