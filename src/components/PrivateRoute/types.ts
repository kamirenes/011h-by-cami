import React from 'react';

export type TPrivateRouteProps = {
  path: string,
  children: React.ReactNode,
  exact?: boolean,
  authenticated: boolean,
}