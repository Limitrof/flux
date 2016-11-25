import React from 'react';
import AppRoot from './components/AppRoot';
//import AppRoot2 from './components/AppRoot2';
var forPath=window.location.href;
React.render(
  <AppRoot path={forPath} />,
  document.getElementById('app-root')
);
/*
React.render(
  <AppRoot2 />,
  document.getElementById('app-root2')
);
*/
