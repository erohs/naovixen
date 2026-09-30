import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { RichContent } from '../RichContent.component';
import { richContentBody as body } from './RichContentBody.const';

describe('Using RichContent, given a body with every supported block, when it renders', () => {
    test('then it should render second-level headings', () => {
        render(<RichContent body={body} />);

        expect(screen.getByRole('heading', { level: 2, name: 'Example heading' })).toBeDefined();
    });

    test('then it should render numbered headings at the second level', () => {
        render(<RichContent body={body} />);

        expect(screen.getByRole('heading', { level: 2, name: 'Second part' })).toBeDefined();
    });

    test('then it should number numbered headings by their order', () => {
        render(<RichContent body={body} />);

        expect(screen.getByText('02')).toBeDefined();
    });

    test('then it should pair each fact with its label', () => {
        render(<RichContent body={body} />);

        expect(screen.getByRole('definition').textContent).toBe('Lead engineer');
    });

    test('then it should open link buttons in a new tab', () => {
        render(<RichContent body={body} />);

        expect(screen.getByRole('link', { name: 'Live demo (opens in new tab)' })).toHaveProperty(
            'target',
            '_blank',
        );
    });

    test('then it should render third-level headings', () => {
        render(<RichContent body={body} />);

        expect(screen.getByRole('heading', { level: 3, name: 'Example subheading' })).toBeDefined();
    });

    test('then it should render paragraphs', () => {
        render(<RichContent body={body} />);

        expect(screen.getByText('Example paragraph')).toHaveProperty('tagName', 'P');
    });

    test('then it should render strong marks', () => {
        render(<RichContent body={body} />);

        expect(screen.getByText('Strong words')).toHaveProperty('tagName', 'STRONG');
    });

    test('then it should render inline code', () => {
        render(<RichContent body={body} />);

        expect(screen.getByText('npm test')).toHaveProperty('tagName', 'CODE');
    });

    test('then it should render block quotes', () => {
        render(<RichContent body={body} />);

        expect(screen.getByRole('blockquote').textContent).toBe('Example quotation');
    });

    test('then it should render lists', () => {
        render(<RichContent body={body} />);

        expect(screen.getByRole('listitem').textContent).toBe('Example item');
    });

    test('then it should link to pages on the site in place', () => {
        render(<RichContent body={body} />);

        expect(screen.getByRole('link', { name: 'Our work' })).toHaveProperty('target', '');
    });

    test('then it should open other sites in a new tab', () => {
        render(<RichContent body={body} />);

        expect(
            screen.getByRole('link', { name: 'Example site (opens in new tab)' }),
        ).toHaveProperty('target', '_blank');
    });

    test('then it should link email addresses in place', () => {
        render(<RichContent body={body} />);

        expect(screen.getByRole('link', { name: 'Email me' })).toHaveProperty('target', '');
    });

    test('then it should keep the text of an unknown mark', () => {
        render(<RichContent body={body} />);

        expect(screen.getByText('Oddly marked')).toHaveProperty('tagName', 'P');
    });

    test('then it should render callouts', () => {
        render(<RichContent body={body} />);

        expect(screen.getByRole('note').textContent).toBe('tip!Example titleTip text');
    });

    test('then it should render code blocks', () => {
        render(<RichContent body={body} />);

        expect(screen.getByText('const answer = 42;')).toHaveProperty('tagName', 'CODE');
    });

    test('then it should render figures', () => {
        render(<RichContent body={body} />);

        expect(screen.getByRole('img', { name: 'Example picture' })).toBeDefined();
    });

    test('then it should print nothing for an unknown block type', () => {
        render(<RichContent body={[...body, { _type: 'mystery', _key: 'mystery' }]} />);

        expect(screen.queryByText(/mystery/)).toBeNull();
    });
});
