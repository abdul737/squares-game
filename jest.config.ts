import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    "\\.js$": 'babel-jest'
  },
  moduleNameMapper: {
    "^lodash-es$": "lodash"
  },
  verbose: true,
};
export default config;