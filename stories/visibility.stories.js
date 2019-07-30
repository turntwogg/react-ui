import React from 'react';

import { storiesOf } from '@storybook/react';
import { Visibility } from '../src';

storiesOf('Visibility', module)
  .add('Hidden', () => <Visibility hidden>Hidden Stuff</Visibility>)
  .add('Hidden @ m', () => <Visibility hidden={['m']}>Hidden @ m</Visibility>)
  .add('Hidden @ l', () => <Visibility hidden={['l']}>Hidden @ l</Visibility>)
  .add('Visible @ m', () => (
    <Visibility visible={['m']}>Visible @ m</Visibility>
  ));
