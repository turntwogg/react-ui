import React from 'react';

import ThemeContext from './ThemeContext';

import defaultTheme from './theme';

const ThemeProvider = ({ children, theme }) => {
  const t = { ...defaultTheme, ...theme };
  return <ThemeContext.Provider value={t}>{children}</ThemeContext.Provider>;
};

ThemeProvider.defaultProps = {
  theme: {},
};

export default ThemeProvider;
