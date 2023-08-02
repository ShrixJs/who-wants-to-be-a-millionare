/* eslint-disable @typescript-eslint/comma-dangle */
import React from 'react';
import { createRoot } from 'react-dom/client';

import './assets/styles/styles.css';

const rootEl = document.querySelector('#root');

if (!rootEl) throw new Error('Cannot find root element with that id');

const root = createRoot(rootEl);

root.render(
  <h1>Who wants to be a millionare</h1>
);
