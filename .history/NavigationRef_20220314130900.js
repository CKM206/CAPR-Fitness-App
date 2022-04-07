// RootNavigation.js

import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, screen, params) {
  navigationRef.current?.navigate(name, screen, params);
}