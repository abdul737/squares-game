import { useEffect, useState } from 'react'

/**
 * Overrides useState hook, and automatically saves its state in the localStorage
 * @param defaultState - default value for the useState
 * @param contextName - used in as key in localStorage
 * @returns [state, setState]
 */
export const useAutoSavedState = <S>(
  defaultState: S | (() => S),
  contextName: 'GameContext' | 'SettingsContext'
): [S, React.Dispatch<React.SetStateAction<S>>] => {
  const [state, setState] = useState<S>(defaultState);

  useEffect(() => {
    const savedSettingsContext = localStorage.getItem(contextName)
    if (savedSettingsContext) {
      const savedState = JSON.parse(savedSettingsContext)
      setState(savedState)
    }
  }, [contextName]);

  useEffect(() => {
    localStorage.setItem(contextName, JSON.stringify(state))
  }, [state, contextName]);

  return [state, setState];
}