import { Dispatch, SetStateAction, createContext } from 'react';

export type ColorThemes = 'light' | 'dark';

interface ThemeState {
  color: ColorThemes;
  garden: boolean;
  setColor: Dispatch<SetStateAction<ColorThemes>>;
  setGarden: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeState>({
  color: 'light',
  garden: false,
  setColor: () => {},
  setGarden: () => {}
});

