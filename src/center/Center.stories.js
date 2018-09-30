import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Center from './Center';

storiesOf('Center', module)
  .add('with text', () => <Center>Hello Center</Center>)
  .add('with vertical horizontal', () => (
    <Center vertical horizontal>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Center>
  ));
