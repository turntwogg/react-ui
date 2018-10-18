import React from 'react';

import { storiesOf } from '@storybook/react';
import { Container, Row, Col, ThemeProvider } from '../src';

storiesOf('Grid', module).add('Default', () => (
  <Container>
    <Row>
      <Col sm={6}>Col 1</Col>
      <Col sm={3}>Col 2</Col>
      <Col sm={3}>Col 3</Col>
    </Row>
  </Container>
));
