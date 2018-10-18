import React from 'react';
import ThemeContext from './ThemeContext';

const WithTheme = ({ children }) => (
  <ThemeContext.Consumer>{theme => children(theme)}</ThemeContext.Consumer>
);

export default WithTheme;
