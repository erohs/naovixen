import type { IProject } from '@naovixen/models';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { renderWithProvider } from '../../tests/functions/RenderWithProvider.function';
import { ProjectCard } from '../ProjectCard.component';

const project: IProject = {
  slug: 'example-project',
  title: 'Example project',
  summary: 'An example summary.',
  tldr: 'Example.',
  problem: 'Example.',
  role: 'Example',
  timeline: 'Example',
  tags: ['Example tag'],
  stack: ['TypeScript', 'React'],
};

const screenshot = { src: '/example.png', alt: 'Example home page', width: 1600, height: 1000 };

describe('Using ProjectCard', () => {
  describe('given a project without a screenshot', () => {
    describe('when it renders', () => {
      test('then it should title the card with a heading at the given level', () => {
        renderWithProvider(<ProjectCard project={project} href="/work/example" headingLevel={3} />);

        expect(screen.getByRole('heading', { level: 3, name: 'Example project' })).toBeDefined();
      });

      test('then it should link to the case study, naming the project', () => {
        renderWithProvider(<ProjectCard project={project} href="/work/example" headingLevel={3} />);

        expect(
          screen.getByRole('link', { name: 'Read case study: Example project' }),
        ).toHaveProperty('pathname', '/work/example');
      });

      test('then it should list the tech stack', () => {
        renderWithProvider(<ProjectCard project={project} href="/work/example" headingLevel={3} />);

        expect(screen.getByRole('list', { name: 'Tech stack' }).textContent).toBe(
          'TypeScriptReact',
        );
      });

      test('then it should show no image', () => {
        renderWithProvider(<ProjectCard project={project} href="/work/example" headingLevel={3} />);

        expect(screen.queryByRole('img')).toBeNull();
      });

      test('then it should have no accessibility violations', async () => {
        renderWithProvider(<ProjectCard project={project} href="/work/example" headingLevel={3} />);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });

  describe('given a project with a screenshot', () => {
    describe('when it renders', () => {
      test('then it should show the screenshot by its alt text', () => {
        renderWithProvider(
          <ProjectCard
            project={{ ...project, screenshot }}
            href="/work/example"
            headingLevel={2}
          />,
        );

        expect(screen.getByRole('img', { name: 'Example home page' })).toBeDefined();
      });

      test('then it should have no accessibility violations', async () => {
        renderWithProvider(
          <ProjectCard
            project={{ ...project, screenshot }}
            href="/work/example"
            headingLevel={2}
          />,
        );

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });
});
