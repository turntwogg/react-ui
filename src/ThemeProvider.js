import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import defaultTheme from './theme';

const ThemeProvider = ({ children, theme }) => {
  const t = { ...defaultTheme, ...theme };
  return <StyledThemeProvider theme={t}>{children}</StyledThemeProvider>;
};

ThemeProvider.defaultProps = {
  theme: {},
};

export default ThemeProvider;
