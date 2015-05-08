import React from 'react';
import Page from './components/Page';
import PageData from './PageData'
require('../public/style/gwilco.scss');

React.render(
  <Page data={PageData} />,
  document.body
)
