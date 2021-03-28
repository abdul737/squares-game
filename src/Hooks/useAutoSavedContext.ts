import { useEffect, useState } from 'react';

const loadSavedContextState = (contextName: string, defaultState: any) => {
  const savedContext = localStorage.getItem(contextName);
  if (savedContext) {
    const savedState = JSON.parse(savedContext);
    return savedState;
  }
  return defaultState;
};

/**
 * Overrides useState hook, and automatically saves its state in the localStorage
 * @param defaultState - default value for the useState
 * @param contextName - used in as key in localStorage
 * @returns [state, setState]
 */
export const useAutoSavedState = <S>(
  defaultState: S | (() => S),
  contextName: 'GameContext' | 'SettingsContext',
): [S, React.Dispatch<React.SetStateAction<S>>] => {
  const [state, setState] = useState<S>(loadSavedContextState(contextName, defaultState));

  useEffect(() => {
    localStorage.setItem(contextName, JSON.stringify(state));
  }, [state, contextName]);

  return [state, setState];
};
