import React from 'react';
import { ThemeConsumer } from 'styled-components';

const WithTheme = ({ children }) => (
  <ThemeConsumer>{theme => children(theme)}</ThemeConsumer>
);

export default WithTheme;
