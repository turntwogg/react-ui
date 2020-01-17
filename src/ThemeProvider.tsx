import React from 'react';

import ThemeContext from './ThemeContext';

import defaultTheme from './theme';

export interface Props {
  children: object;
  theme: object;
}

const ThemeProvider = ({ children, theme = {} }: Props) => {
  return (
    <ThemeContext.Provider value={{ ...defaultTheme, ...theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
