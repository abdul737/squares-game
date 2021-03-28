import React, { useContext, useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
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
    <Box maxWidth="400px" p="15px">
      <Typography variant="h5">{getLabel('instructions')}</Typography>
      <Box mt="10px">
        <Typography variant="body1">
          {getLabel('instructionsPageContent')}
        </Typography>
      </Box>
    </Box>
    <Box mt="25px">
      <NavigationButton path={ROUTES.MENU} color="primary">{getLabel('goBack')}</NavigationButton>
    </Box>
  </Box>
}