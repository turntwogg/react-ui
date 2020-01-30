import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '../src';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);
