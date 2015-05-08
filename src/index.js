import React from 'react';
import Page from './components/Page';
import PageData from './PageData'
import a11y from 'react-a11y';
require('../public/style/gwilco.scss');

React.render(
  <Page data={PageData} />,
  document.body
)
