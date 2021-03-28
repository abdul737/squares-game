import { useMediaDown } from '../../utils';

export const useTileMargin = () => {
  const isMobileScreen = useMediaDown('xs');
  return isMobileScreen ? 0.25 : 0.30;
};
