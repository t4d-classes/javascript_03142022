

import { doIt } from './utils.js';

doIt("this is fun!");

import('./utils2.js')
  .then(module => module.doIt2('another message'));