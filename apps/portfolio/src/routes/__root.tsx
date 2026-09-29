import type { ReactNode } from 'react';
import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router';

// The two global stylesheets, imported once, in this order: the styles package declares
// the cascade layers that the ui package's component styles are filed into.
import '@naovixen/styles/styles.css';
import '@naovixen/ui/styles.css';

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
