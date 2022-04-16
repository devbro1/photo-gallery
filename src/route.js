import React from 'react';

const route = [
  { path: '/', exact: true, name: '', component: null, redirect: '/auth/SignIn' },

  { path: '/photos/:id', exact: true, name: 'Photo', component: React.lazy(() => import('./pages/photos/photo')), restricted: true, },
  { path: '/announcements', exact: true, name: 'Photo Gallery', component: React.lazy(() => import('./pages/photos/photos')), restricted: true },

  { path: '*', exact: false, name: 'Page Not Found', component: React.lazy(() => import('./pages/Errors/404')), restricted: false },
];

export default route;
