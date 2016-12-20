import React from 'react';
import AppRoot from './components/AppRoot';
//import AppRoot1 from './components/AppRoot1';
import AppRoot2 from './components/AppRoot2';
import AppRootMystery from './components/AppRootMystery';
import AppRootStaff from './components/AppRootStaff';
import AppBrandPromo from './components/AppBrandPromo';
//var forPath=window.location.href;
React.render(
  <AppRoot path="byone" />,
  document.getElementById('app-root')
);
/*React.render(
  <AppRoot1 path="self" />,
  document.getElementById('app-root1')
);*/
React.render(
    <AppRoot2 path="marketing" />,
    document.getElementById('app-root2')
);
React.render(
    <AppBrandPromo path="marketing" />,
    document.getElementById('app-brand-promo')
);
React.render(
    <AppRootMystery path="marketing" />,
    document.getElementById('app-mystery')
);
React.render(
    <AppRootStaff path="marketing" />,
    document.getElementById('app-staff')
);
/*
React.render(
  <AppRoot2 />,
  document.getElementById('app-root2')
);
*/
