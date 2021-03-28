import { PlayerColorSchemeType } from '../contexts';
import { Players } from './GameConstants';

export const PLAYER_COLOR_SCHEMES: PlayerColorSchemeType[] = [
  {
    [Players.PLAYER_1]: '#f44336',
    [Players.PLAYER_2]: '#4caf50',
  },
  {
    [Players.PLAYER_1]: '#aa00ff',
    [Players.PLAYER_2]: '#00bfa5',
  },
  {
    [Players.PLAYER_1]: '#ffd600',
    [Players.PLAYER_2]: '#00c853',
  },
  {
    [Players.PLAYER_1]: '#00b8d4',
    [Players.PLAYER_2]: '#ff6f00',
  },
];
