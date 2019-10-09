import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import RenderModel from './editor/renderModel';
import Editor from './editor';

render(
  <Editor />,
  document.getElementById('main')
);