import type { LinkProps } from '@naovixen/components';
import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import type { FunctionComponent } from 'react';
import { describe, expect, test } from 'vitest';

import { CaseStudyLink } from '../CaseStudyLink.component';

const RouterLink: FunctionComponent<LinkProps> = ({ children, ...anchorProps }) => (
    <a {...anchorProps} data-routed="true">
        {children}
    </a>
);

describe('Using CaseStudyLink', () => {
    describe('given an href and a project title', () => {
        describe('when it renders', () => {
            test('then it should be a link named for the project', () => {
                render(<CaseStudyLink href="/work/example" projectTitle="Example project" />);

                expect(
                    screen.getByRole('link', { name: 'Read case study: Example project' }),
                ).toHaveProperty('pathname', '/work/example');
            });

            test('then it should have no accessibility violations', async () => {
                render(<CaseStudyLink href="/work/example" projectTitle="Example project" />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given a link component', () => {
        describe('when it renders', () => {
            test('then it should render the link with it', () => {
                render(
                    <CaseStudyLink
                        href="/work/example"
                        projectTitle="Example project"
                        linkComponent={RouterLink}
                    />,
                );

                expect(screen.getByRole('link').getAttribute('data-routed')).toBe('true');
            });
        });
    });
});
