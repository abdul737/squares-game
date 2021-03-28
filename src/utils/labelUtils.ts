import { MAPPED_LABELS } from '../constants';

export const getLabel = (labelName: keyof typeof MAPPED_LABELS): string => MAPPED_LABELS[labelName];
