import { FunctionComponent, ReactNode, useState } from 'react';

import { ColorThemes, ThemeContext } from "./theme-context";

interface ThemeProviderProps {
  children: ReactNode | ReactNode[];
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  const [color, setColor] = useState<ColorThemes>('light');
  const [garden, setGarden] = useState(false);

  return <ThemeContext.Provider value={{ color, garden, setColor, setGarden }}>{children}</ThemeContext.Provider>
};
