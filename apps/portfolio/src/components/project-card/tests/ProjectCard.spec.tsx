import type { LinkProps } from '@naovixen/components';
import { findAxeViolations } from '@naovixen/nvpack/testing';
import type { IProject } from '@naovixen/models';
import { render, screen } from '@testing-library/react';
import type { FunctionComponent } from 'react';
import { describe, expect, test } from 'vitest';

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

const RouterLink: FunctionComponent<LinkProps> = ({ children, ...anchorProps }) => (
    <a {...anchorProps} data-routed="true">
        {children}
    </a>
);

describe('Using ProjectCard', () => {
    describe('given a project without a screenshot', () => {
        describe('when it renders', () => {
            test('then it should be an article', () => {
                render(<ProjectCard project={project} href="/work/example" headingLevel={3} />);

                expect(screen.getByRole('article')).toBeDefined();
            });

            test('then it should title the card with a heading at the given level', () => {
                render(<ProjectCard project={project} href="/work/example" headingLevel={3} />);

                expect(
                    screen.getByRole('heading', { level: 3, name: 'Example project' }),
                ).toBeDefined();
            });

            test('then it should show the summary', () => {
                render(<ProjectCard project={project} href="/work/example" headingLevel={3} />);

                expect(screen.getByText('An example summary.')).toBeDefined();
            });

            test('then it should link to the case study, naming the project', () => {
                render(<ProjectCard project={project} href="/work/example" headingLevel={3} />);

                expect(
                    screen.getByRole('link', { name: 'Read case study: Example project' }),
                ).toHaveProperty('pathname', '/work/example');
            });

            test('then it should list the tech stack', () => {
                render(<ProjectCard project={project} href="/work/example" headingLevel={3} />);

                expect(screen.getByRole('list', { name: 'Tech stack' }).textContent).toBe(
                    'TypeScriptReact',
                );
            });

            test('then it should show no image', () => {
                render(<ProjectCard project={project} href="/work/example" headingLevel={3} />);

                expect(screen.queryByRole('img')).toBeNull();
            });

            test('then it should have no accessibility violations', async () => {
                render(<ProjectCard project={project} href="/work/example" headingLevel={3} />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given a project with a screenshot', () => {
        describe('when it renders', () => {
            test('then it should show the screenshot by its alt text', () => {
                render(
                    <ProjectCard
                        project={{ ...project, screenshot }}
                        href="/work/example"
                        headingLevel={2}
                    />,
                );

                expect(screen.getByRole('img', { name: 'Example home page' })).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                render(
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

    describe('given a link component', () => {
        describe('when it renders', () => {
            test('then it should render the case study link with it', () => {
                render(
                    <ProjectCard
                        project={project}
                        href="/work/example"
                        headingLevel={3}
                        linkComponent={RouterLink}
                    />,
                );

                expect(screen.getByRole('link').getAttribute('data-routed')).toBe('true');
            });
        });
    });

    describe('given intrinsic article props', () => {
        describe('when it renders', () => {
            test('then it should pass them through to the article', () => {
                render(
                    <ProjectCard
                        project={project}
                        href="/work/example"
                        headingLevel={3}
                        aria-label="Featured project"
                    />,
                );

                expect(screen.getByRole('article', { name: 'Featured project' })).toBeDefined();
            });
        });
    });
});
