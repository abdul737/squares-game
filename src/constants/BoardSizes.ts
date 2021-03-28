interface IBoardSizeObject {
  value: number;
  label: 'x3' | 'x4' | 'x6' | 'x8';
}

export const BOARD_SIZES: IBoardSizeObject[] = [
  {
    value: 3,
    label: 'x3',
  },
  {
    value: 4,
    label: 'x4',
  },
  {
    value: 6,
    label: 'x6',
  },
  {
    value: 8,
    label: 'x8',
  },
];
