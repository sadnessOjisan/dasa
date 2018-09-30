import react from 'react';
import { configure } from '@storybook/react';

const req = require.context('../src/center', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);