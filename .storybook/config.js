import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider, Reset } from '../src';
// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <ThemeProvider>
    <Reset />
    {story()}
  </ThemeProvider>
));

configure(loadStories, module);
