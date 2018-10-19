import React from 'react';

import { storiesOf } from '@storybook/react';
import { Container, Row, Col, ThemeProvider } from '../src';

const colStyles = { backgroundColor: '#ccc' };

storiesOf('Grid', module).add('Default', () => (
  <Container>
    <Row>
      <Col sizes={{ sm: 4, m: 6, l: 3 }}>
        <div style={colStyles}>Col 1</div>
      </Col>
      <Col sizes={{ sm: 4, m: 3, l: 6 }}>
        <div style={colStyles}>Col 2</div>
      </Col>
      <Col sizes={{ sm: 4, m: 3, l: 3 }}>
        <div style={colStyles}>Col 3</div>
      </Col>
      <Col sizes={{ sm: 4, m: 6, l: 3 }}>
        <div style={colStyles}>Col 1</div>
      </Col>
      <Col sizes={{ sm: 4, m: 3, l: 6 }}>
        <div style={colStyles}>Col 2</div>
      </Col>
      <Col sizes={{ sm: 4, m: 3, l: 3 }}>
        <div style={colStyles}>Col 3</div>
      </Col>
    </Row>
    <div>Other</div>
  </Container>
));
