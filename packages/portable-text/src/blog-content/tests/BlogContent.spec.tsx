import type { LinkProps } from '@naovixen/components';
import { render, screen } from '@testing-library/react';
import type { FunctionComponent } from 'react';
import { describe, expect, test } from 'vitest';

import { BlogContent } from '../BlogContent.component';
import { blogContentBody as body } from './BlogContentBody.const';

const RouterLink: FunctionComponent<LinkProps> = ({ children, ...anchorProps }) => (
    <a {...anchorProps} data-routed="true">
        {children}
    </a>
);

describe('Using BlogContent, given a body with every supported block, when it renders', () => {
    test('then it should render second-level headings', () => {
        render(<BlogContent body={body} />);

        expect(screen.getByRole('heading', { level: 2, name: 'Example heading' })).toBeDefined();
    });

    test('then it should render third-level headings', () => {
        render(<BlogContent body={body} />);

        expect(screen.getByRole('heading', { level: 3, name: 'Example subheading' })).toBeDefined();
    });

    test('then it should render paragraphs', () => {
        render(<BlogContent body={body} />);

        expect(screen.getByText('Example paragraph')).toHaveProperty('tagName', 'P');
    });

    test('then it should render strong marks', () => {
        render(<BlogContent body={body} />);

        expect(screen.getByText('Strong words')).toHaveProperty('tagName', 'STRONG');
    });

    test('then it should render inline code', () => {
        render(<BlogContent body={body} />);

        expect(screen.getByText('npm test')).toHaveProperty('tagName', 'CODE');
    });

    test('then it should render block quotes', () => {
        render(<BlogContent body={body} />);

        expect(screen.getByRole('blockquote').textContent).toBe('Example quotation');
    });

    test('then it should render lists', () => {
        render(<BlogContent body={body} />);

        expect(screen.getByRole('listitem').textContent).toBe('Example item');
    });

    test('then it should link to pages on the site in place', () => {
        render(<BlogContent body={body} />);

        expect(screen.getByRole('link', { name: 'Our work' })).toHaveProperty('target', '');
    });

    test('then it should open other sites in a new tab', () => {
        render(<BlogContent body={body} />);

        expect(
            screen.getByRole('link', { name: 'Example site (opens in new tab)' }),
        ).toHaveProperty('target', '_blank');
    });

    test('then it should link email addresses in place', () => {
        render(<BlogContent body={body} />);

        expect(screen.getByRole('link', { name: 'Email me' })).toHaveProperty('target', '');
    });

    test('then it should keep the text of an unknown mark', () => {
        render(<BlogContent body={body} />);

        expect(screen.getByText('Oddly marked')).toHaveProperty('tagName', 'P');
    });

    test('then it should render callouts', () => {
        render(<BlogContent body={body} />);

        expect(screen.getByRole('note').textContent).toBe('tip!Example titleTip text');
    });

    test('then it should render code blocks', () => {
        render(<BlogContent body={body} />);

        expect(screen.getByText('const answer = 42;')).toHaveProperty('tagName', 'CODE');
    });

    test('then it should render figures', () => {
        render(<BlogContent body={body} />);

        expect(screen.getByRole('img', { name: 'Example picture' })).toBeDefined();
    });

    test('then it should print nothing for an unknown block type', () => {
        render(<BlogContent body={[...body, { _type: 'mystery', _key: 'mystery' }]} />);

        expect(screen.queryByText(/mystery/)).toBeNull();
    });
});

describe('Using BlogContent, given a link component, when it renders', () => {
    test('then it should render links to pages on the site with it', () => {
        render(<BlogContent body={body} linkComponent={RouterLink} />);

        expect(screen.getByRole('link', { name: 'Our work' }).getAttribute('data-routed')).toBe(
            'true',
        );
    });

    test('then it should leave links to other sites alone', () => {
        render(<BlogContent body={body} linkComponent={RouterLink} />);

        const link = screen.getByRole('link', { name: 'Example site (opens in new tab)' });

        expect(link.hasAttribute('data-routed')).toBe(false);
    });

    test('then it should leave email links alone', () => {
        render(<BlogContent body={body} linkComponent={RouterLink} />);

        expect(screen.getByRole('link', { name: 'Email me' }).hasAttribute('data-routed')).toBe(
            false,
        );
    });
});
