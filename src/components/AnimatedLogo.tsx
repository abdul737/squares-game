import { Box } from "@material-ui/core";
import React from "react";
import { Players } from "../constants";
import { Tile } from "./Tile";

export const AnimatedLogo: React.FC = () => {
  return <Box>
    <Tile value={Players.PLAYER_1}/>
    <Tile value={Players.PLAYER_2}/>
  </Box>
}