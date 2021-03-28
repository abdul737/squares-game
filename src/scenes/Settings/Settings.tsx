import React, { useContext, useEffect, useState } from "react";
import { makeStyles, Box, Button, FormLabel } from "@material-ui/core";
import { PLAYER_COLOR_SCHEMES, ROUTES } from "../../constants";
import { LogoTiles, NavigationButton } from "../../components";
import { getLabel } from "../../utils";
import { SettingsContext } from "../../contexts";
import { isEqual } from "lodash";

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
  colorChooseItem: {
    padding: theme.spacing(1),
  }
}))

export const Settings: React.FC = () => {
  const classes = useStyles();
  const { setBackgroundStyle, playerColorScheme, setPlayerColorScheme } = useContext(SettingsContext);
  const [colorSchemeIndex, setColorSchemeIndex] = useState(
    PLAYER_COLOR_SCHEMES.findIndex(colorScheme => isEqual(colorScheme, playerColorScheme))
  )

  useEffect(() => {
    setBackgroundStyle('default');
  }, [setBackgroundStyle])

  const handleOnSave = () => {
    setPlayerColorScheme(PLAYER_COLOR_SCHEMES[colorSchemeIndex]);
  }

  return (
    <Box className={classes.root}>
      <LogoTiles />
      <Box display="flex">
        <Box mt={4} mr={3}>
          <FormLabel component="legend">{getLabel('colorScheme')}:</FormLabel>
        </Box>
        <Box>
          {
            PLAYER_COLOR_SCHEMES.map((colorScheme, index) => (
              <Box>
                <Button variant={colorSchemeIndex === index ? 'outlined': 'text'} onClick={() => setColorSchemeIndex(index)}>
                  <LogoTiles hideTitle size={50} colorScheme={colorScheme}/>
                </Button>
              </Box>
            ))
          }
        </Box>
      </Box>
      <Box className={classes.buttons}>
        <Box className={classes.settingsItem}>
          <NavigationButton path={ROUTES.MENU}>
            {getLabel('cancel')}
          </NavigationButton>
        </Box>
        <Box className={classes.settingsItem}>
          <NavigationButton onClick={handleOnSave} path={ROUTES.MENU} color="primary">
            {getLabel('save')}
          </NavigationButton>
        </Box>
      </Box>
    </Box>
  )
}