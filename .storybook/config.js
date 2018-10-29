import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider, Body, Reset } from '../src';
// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>);

configure(loadStories, module);
