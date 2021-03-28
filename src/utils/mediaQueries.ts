import { useMediaQuery, useTheme } from '@material-ui/core';

export const useMediaUp = (breakpoint: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(breakpoint));
};

export const useMediaDown = (breakpoint: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(breakpoint));
};
