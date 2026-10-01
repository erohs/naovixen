import { render, screen } from '@testing-library/react';
import type { FunctionComponent } from 'react';
import { describe, expect, test } from 'vitest';

import { LinkProvider } from '../../link-provider/LinkProvider.component';
import type { AnchorProps } from '../../link-provider/types/AnchorProps';
import { Link } from '../Link.component';

const RouterLink: FunctionComponent<AnchorProps> = ({ children, ...anchorProps }) => (
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

describe('Using Link, given a LinkProvider, when it links to an email address', () => {
    test('then it should render a plain anchor', () => {
        render(
            <LinkProvider linkComponent={RouterLink}>
                <Link href="mailto:someone@example.com">Email</Link>
            </LinkProvider>,
        );

        expect(screen.getByRole('link', { name: 'Email' }).hasAttribute('data-routed')).toBe(false);
    });

    test('then it should open in place', () => {
        render(
            <LinkProvider linkComponent={RouterLink}>
                <Link href="mailto:someone@example.com">Email</Link>
            </LinkProvider>,
        );

        expect(screen.getByRole('link', { name: 'Email' }).hasAttribute('target')).toBe(false);
    });
});

describe('Using Link, given no LinkProvider, when it links to a page on this site', () => {
    test('then it should render a plain anchor', () => {
        render(<Link href="/blog">Blog</Link>);

        expect(screen.getByRole('link', { name: 'Blog' }).getAttribute('href')).toBe('/blog');
    });
});

describe('Using Link, when it links to another site', () => {
    test('then it should warn that it opens a new tab', () => {
        render(<Link href="https://example.com">Example</Link>);

        expect(
            screen.getByRole('link', { name: /^Example ?\(opens in new tab\)$/ }),
        ).toHaveProperty('target', '_blank');
    });

    test('then it should not give the other site a handle on this window', () => {
        render(<Link href="https://example.com">Example</Link>);

        expect(screen.getByRole('link')).toHaveProperty('rel', 'noopener noreferrer');
    });
});

describe('Using Link, given it is told not to open a new tab, when it links to another site', () => {
    test('then it should open in place', () => {
        render(
            <Link href="https://example.com" opensInNewTab={false}>
                Example
            </Link>,
        );

        expect(screen.getByRole('link', { name: 'Example' }).hasAttribute('target')).toBe(false);
    });
});

describe('Using Link, given it is told to open a new tab, when it links to a page on this site', () => {
    test('then it should warn that it opens a new tab', () => {
        render(
            <Link href="/blog" opensInNewTab>
                Blog
            </Link>,
        );

        expect(screen.getByRole('link', { name: /^Blog ?\(opens in new tab\)$/ })).toHaveProperty(
            'target',
            '_blank',
        );
    });
});
