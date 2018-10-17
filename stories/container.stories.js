import React from 'react';

import { storiesOf } from '@storybook/react';
import { Container, ThemeProvider } from '../src';

storiesOf('Container', module)
  .addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)
  .add('Default', () => <Container>Contained Stuff</Container>);
