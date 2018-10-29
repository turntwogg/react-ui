import React from 'react';

import { storiesOf } from '@storybook/react';
import { Container } from '../src';

storiesOf('Container', module).add('Default', () => (
  <Container>Contained Stuff</Container>
));
