import React, { useContext } from "react";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import { BOARD_SIZES } from "../../constants";
import { SettingsContext } from "../../contexts";
import { getLabel } from "../../utils";

export const ChooseBoardSize: React.FC = () => {
  const { boardSize, setBoardSize } = useContext(SettingsContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoardSize(parseInt((event.target as HTMLInputElement).value));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{getLabel('boardSize')}:</FormLabel>
      <RadioGroup
        aria-label={getLabel('chooseBoardSize')}
        value={boardSize}
        onChange={handleChange}
      >
        {
          BOARD_SIZES.map(({ value, label }) => (
            <FormControlLabel
              key={label}
              value={value}
              control={<Radio />}
              label={getLabel(label)}
            />
          ))
        }
      </RadioGroup>
    </FormControl>
  )
}