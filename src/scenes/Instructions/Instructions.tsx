import React, { useContext, useEffect } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { LogoTiles, NavigationButton } from "../../components";
import { ROUTES } from "../../constants";
import { getLabel } from "../../utils";
import { SettingsContext } from "../../contexts";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
})

export const Instructions: React.FC = () => {
  const classes = useStyles();
  const { setBackgroundStyle } = useContext(SettingsContext);

  useEffect(() => {
    setBackgroundStyle('default');
  }, [setBackgroundStyle])

  return <Box className={classes.root}>
    <LogoTiles />
    Instructions page

    <Box>
        <NavigationButton path={ROUTES.MENU} color="primary">{getLabel('goBack')}</NavigationButton>
      </Box>
  </Box>
}