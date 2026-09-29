import type { ReactNode } from 'react';
import { createFileRoute } from '@tanstack/react-router';

import { IconName } from '@naovixen/components';
import { designSystemPath } from '@naovixen/design-system';
import { createExcerpt } from '@naovixen/formatting';

// Phase 1 scaffolding: proves the workspace packages resolve from TypeScript source with
// no build step. Phase 5 replaces this with the real home page.
const HomeComponent = (): ReactNode => {
  const wiringChecks = [
    { packageName: '@naovixen/components', result: IconName.ArrowRight },
    { packageName: '@naovixen/formatting', result: createExcerpt('Scaffolding the monorepo', 14) },
    { packageName: '@naovixen/design-system', result: designSystemPath },
  ];

  return (
    <main>
      <h1>naovixen</h1>
      <p>Phase 1 scaffold. Every shared package below resolved from source.</p>
      <ul>
        {wiringChecks.map((wiringCheck) => (
          <li key={wiringCheck.result}>
            <code>{wiringCheck.packageName}</code> &rarr; <code>{wiringCheck.result}</code>
          </li>
        ))}
      </ul>
    </main>
  );
};

export const Route = createFileRoute('/')({
  component: HomeComponent,
});
