import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Marquee from './Marquee';

storiesOf('Marquee', module)
  .add('move', () => (
    <Marquee>
      😀 😎 👍 💯
    </Marquee>
  ));
