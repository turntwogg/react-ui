import React from 'react';

import { storiesOf } from '@storybook/react';
import { Container, ThemeProvider } from '../src';

storiesOf('Container', module).add('Default', () => (
  <Container>Contained Stuff</Container>
));
