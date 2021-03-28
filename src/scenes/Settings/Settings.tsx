import React, { useContext, useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
import { ROUTES } from "../../constants";
import { NavigationButton } from "../../components";
import { getLabel } from "../../utils";
import { SettingsContext } from "../../contexts";

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
  settingsItem: {
    margin: theme.spacing(1),
  },
}))

export const Settings: React.FC = () => {
  const { setBackgroundStyle } = useContext(SettingsContext);
  const classes = useStyles();

  useEffect(() => {
    setBackgroundStyle('default');
  }, [setBackgroundStyle])

  return (
    <Box className={classes.root}>
      <Box className={classes.buttons}>
        <Box className={classes.settingsItem}>
          <NavigationButton path={ROUTES.MENU}>{getLabel('cancel')}</NavigationButton>
        </Box>
        <Box className={classes.settingsItem}>
          <NavigationButton path={ROUTES.MENU} color="primary">{getLabel('save')}</NavigationButton>
        </Box>
      </Box>
    </Box>
  )
}