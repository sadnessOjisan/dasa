import React from 'react';
import styled from 'styled-components'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Color from './Color';

storiesOf('Color', module)
  .add('red', () => <Tile color={Color.red}></Tile>)


  const Tile = styled.div`
  width: 300px; 
  height: 300px;
  background-color: ${props=>props.color}
  `