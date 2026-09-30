import { render, screen } from '@testing-library/react';
import type { FunctionComponent } from 'react';
import { describe, expect, test } from 'vitest';

import { LinkProvider } from '../../link-provider/LinkProvider.component';
import { Link } from '../Link.component';
import type { LinkProps } from '../types/LinkProps';

const RouterLink: FunctionComponent<LinkProps> = ({ children, ...anchorProps }) => (
    <a {...anchorProps} data-routed="true">
        {children}
    </a>
);

describe('Using Link, given a LinkProvider, when it links to a page on this site', () => {
    test('then it should render through the provided component', () => {
        render(
            <LinkProvider linkComponent={RouterLink}>
                <Link href="/blog">Blog</Link>
            </LinkProvider>,
        );

        expect(screen.getByRole('link', { name: 'Blog' }).getAttribute('data-routed')).toBe('true');
    });
});

describe('Using Link, given a LinkProvider, when it links to another site', () => {
    test('then it should render a plain anchor', () => {
        render(
            <LinkProvider linkComponent={RouterLink}>
                <Link href="https://example.com">Example</Link>
            </LinkProvider>,
        );

        expect(screen.getByRole('link', { name: 'Example' }).hasAttribute('data-routed')).toBe(
            false,
        );
    });
});

describe('Using Link, given no LinkProvider, when it links to a page on this site', () => {
    test('then it should render a plain anchor', () => {
        render(<Link href="/blog">Blog</Link>);

        expect(screen.getByRole('link', { name: 'Blog' }).getAttribute('href')).toBe('/blog');
    });
});
