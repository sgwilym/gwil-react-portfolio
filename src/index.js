import React from 'react';
import Page from './components/Page';
import PageData from './PageData';

React.render(
  <Page {...PageData} />,
  document.body
);
