import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { renderWithProvider } from '../../tests/functions/RenderWithProvider.function';
import { BlogContent } from '../BlogContent.component';
import body from './BlogContentBody.json';

describe('Using BlogContent', () => {
  describe('given a body with every supported block', () => {
    describe('when it renders', () => {
      test('then it should render second-level headings', () => {
        renderWithProvider(<BlogContent body={body} />);

        expect(screen.getByRole('heading', { level: 2, name: 'Example heading' })).toBeDefined();
      });

      test('then it should render third-level headings', () => {
        renderWithProvider(<BlogContent body={body} />);

        expect(screen.getByRole('heading', { level: 3, name: 'Example subheading' })).toBeDefined();
      });

      test('then it should render paragraphs', () => {
        renderWithProvider(<BlogContent body={body} />);

        expect(screen.getByText('Example paragraph')).toHaveProperty('tagName', 'P');
      });

      test('then it should render strong marks', () => {
        renderWithProvider(<BlogContent body={body} />);

        expect(screen.getByText('Strong words')).toHaveProperty('tagName', 'STRONG');
      });

      test('then it should render block quotes', () => {
        renderWithProvider(<BlogContent body={body} />);

        expect(screen.getByRole('blockquote').textContent).toBe('Example quotation');
      });

      test('then it should render lists', () => {
        renderWithProvider(<BlogContent body={body} />);

        expect(screen.getByRole('listitem').textContent).toBe('Example item');
      });

      test('then it should link to pages on the site in place', () => {
        renderWithProvider(<BlogContent body={body} />);

        expect(screen.getByRole('link', { name: 'Our work' })).toHaveProperty('target', '');
      });

      test('then it should open other sites in a new tab', () => {
        renderWithProvider(<BlogContent body={body} />);

        expect(
          screen.getByRole('link', { name: 'Example site (opens in new tab)' }),
        ).toHaveProperty('target', '_blank');
      });

      test('then it should keep the text of an unknown mark', () => {
        renderWithProvider(<BlogContent body={body} />);

        expect(screen.getByText('Oddly marked')).toHaveProperty('tagName', 'P');
      });

      test('then it should render callouts', () => {
        renderWithProvider(<BlogContent body={body} />);

        expect(screen.getByRole('note').textContent).toBe('tip!Example titleTip text');
      });

      test('then it should render code blocks', () => {
        renderWithProvider(<BlogContent body={body} />);

        expect(screen.getByRole('code').textContent).toBe('const answer = 42;');
      });

      test('then it should render figures', () => {
        renderWithProvider(<BlogContent body={body} />);

        expect(screen.getByRole('img', { name: 'Example picture' })).toBeDefined();
      });

      test('then it should print nothing for an unknown block type', () => {
        renderWithProvider(<BlogContent body={body} />);

        expect(screen.queryByText(/mystery/)).toBeNull();
      });

      test('then it should have no accessibility violations', async () => {
        renderWithProvider(<BlogContent body={body} />);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });
});
