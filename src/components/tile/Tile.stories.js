import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Tile from './Tile';
import example_image from './example_image.png'

storiesOf('Tile', module)
  .add('repeat', () => (
    <Tile image={example_image} isGlobal>
      😀 😎 👍 💯
    </Tile>
  ));
