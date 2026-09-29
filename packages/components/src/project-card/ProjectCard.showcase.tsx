import type { IProject } from '@naovixen/models';

import type { IShowcase } from '../interfaces/IShowcase';
import { ProjectCard } from './ProjectCard.component';

const exampleProject: IProject = {
  slug: 'example-project',
  title: 'Example project',
  summary: 'A one-line summary of the example project.',
  tldr: 'Example short version.',
  problem: 'Example problem.',
  role: 'Example role',
  timeline: 'Example timeline',
  tags: ['Example tag'],
  stack: ['TypeScript', 'React'],
};

export const projectCardShowcase: IShowcase = {
  name: 'ProjectCard',
  examples: [
    {
      name: 'Without a screenshot',
      render: () => (
        <ProjectCard project={exampleProject} href="/work/example-project" headingLevel={3} />
      ),
    },
    {
      name: 'With a screenshot',
      render: () => (
        <ProjectCard
          project={{
            ...exampleProject,
            screenshot: {
              src: 'https://example.com/example-project.png',
              alt: 'Example project home page',
              width: 1600,
              height: 1000,
            },
          }}
          href="/work/example-project"
          headingLevel={3}
        />
      ),
    },
  ],
};
