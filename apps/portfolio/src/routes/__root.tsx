import type { ReactNode } from 'react';
import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router';

// Order matters: theming declares the cascade layers that component styles are filed into.
import '@naovixen/theming/styles.css';
import '@naovixen/components/styles.css';

const RootComponent = (): ReactNode => (
  <html lang="en-GB">
    <head>
      <HeadContent />
    </head>
    <body>
      <Outlet />
      <Scripts />
    </body>
  </html>
);

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'naovixen' },
    ],
  }),
  component: RootComponent,
});
