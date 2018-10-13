import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Center from './Center';

storiesOf('Center', module)
  .add('with vertical horizontal', () => (
    <Center vertical={true} horizontal={true}>
      <span>
        😀 😎 👍 💯
      </span>
    </Center>
  ));
