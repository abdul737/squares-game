import React, { useContext, useEffect } from "react";
import { Box } from "@material-ui/core";
import { NavigationButton } from "../../components";
import { ROUTES } from "../../constants";
import { getLabel } from "../../utils";
import { SettingsContext } from "../../contexts";

export const Instructions: React.FC = () => {
  const { setBackgroundStyle } = useContext(SettingsContext);

  useEffect(() => {
    setBackgroundStyle('default');
  }, [setBackgroundStyle])

  return <Box>
    Instructions page

    <Box>
        <NavigationButton path={ROUTES.MENU} color="primary">{getLabel('goBack')}</NavigationButton>
      </Box>
  </Box>
}