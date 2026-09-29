import type { ReactNode } from 'react';
import { createFileRoute } from '@tanstack/react-router';

import { createExcerpt } from '@naovixen/content';
import { isDefined } from '@naovixen/core';
import { classNamePrefix } from '@naovixen/styles';
import { systemPagePath } from '@naovixen/system-page';
import { buildBlockClassName } from '@naovixen/ui';

/**
 * Phase 1 scaffolding.
 *
 * This page exists to prove that all five workspace packages resolve, type-check and
 * hot-reload from the app, and that TypeScript source crosses the package boundary with
 * no build step in between. Phase 5 replaces it with the real home page.
 */
const HomeComponent = (): ReactNode => {
  const wiringChecks = [
    { packageName: '@naovixen/core', result: String(isDefined('naovixen')) },
    { packageName: '@naovixen/styles', result: classNamePrefix },
    { packageName: '@naovixen/ui', result: buildBlockClassName('project-card') },
    { packageName: '@naovixen/content', result: createExcerpt('Scaffolding the monorepo', 14) },
    { packageName: '@naovixen/system-page', result: systemPagePath },
  ];

  return (
    <main>
      <h1>naovixen</h1>
      <p>Phase 1 scaffold. Every shared package below resolved from source.</p>
      <ul>
        {wiringChecks.map((wiringCheck) => (
          <li key={wiringCheck.packageName}>
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
