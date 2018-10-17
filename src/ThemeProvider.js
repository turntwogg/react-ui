import React from 'react';
import styled from 'styled-components';

import defaultTheme from './theme';

const ThemeProvider = ({ children, theme }) => {
  const t = { ...defaultTheme, ...theme };
  return <styled.ThemeProvider theme={theme}>{children}</styled.ThemeProvider>;
};

ThemeProvider.defaultProps = {
  theme: {},
};

export default ThemeProvider;
