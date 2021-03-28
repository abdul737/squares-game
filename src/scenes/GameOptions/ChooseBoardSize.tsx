import React from 'react';
import {
  Box, FormControlLabel, FormLabel, Radio, RadioGroup,
} from '@material-ui/core';
import { BOARD_SIZES } from '../../constants';
import { getLabel } from '../../utils';

interface IChooseBoardSizeProps {
  boardSize: number;
  setBoardSize: (size: number) => void;
}

export const ChooseBoardSize: React.FC<IChooseBoardSizeProps> = ({ boardSize, setBoardSize }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoardSize(parseInt((event.target as HTMLInputElement).value, 10));
  };

  return (
    <Box display="flex">
      <Box mt={1.5} mr={2}>
        <FormLabel component="legend">
          {getLabel('boardSize')}
          :
        </FormLabel>
      </Box>
      <RadioGroup aria-label={getLabel('chooseBoardSize')} value={boardSize} onChange={handleChange}>
        {BOARD_SIZES.map(({ value, label }) => (
          <FormControlLabel key={label} value={value} control={<Radio />} label={getLabel(label)} />
        ))}
      </RadioGroup>
    </Box>
  );
};
