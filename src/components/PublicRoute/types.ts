import React from 'react';

export type TPublicRouteProps = {
  path: string,
  children: React.ReactNode,
  exact?: boolean,
  authenticated: boolean,
}