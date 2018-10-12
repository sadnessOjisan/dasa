import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Nobr from './Nobr';

storiesOf('Nobr', module)
.add('add new line without Nobr', () => (
    <Nobr forcePre={true}>
      😀  
      😎  
      👍  
      💯 
    </Nobr>
  )).add('add new line', () => (
    <Nobr forcePre={false}>
      😀
      😎 
      👍 
      💯
    </Nobr>
  ));
