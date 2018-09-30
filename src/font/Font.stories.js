import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Font from './Font';

storiesOf('Font', module)
  .add('normal', () => <Font>Hello Font</Font>)
  .add('red', () => (
    <Font color='red'>
      Hello Font
    </Font>
  ));
