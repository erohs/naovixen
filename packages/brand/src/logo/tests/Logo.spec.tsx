import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Logo } from '../Logo.component';

describe('Using Logo, given no href, when it renders', () => {
    test('then it should link home by the name naovixen', () => {
        render(<Logo />);

        expect(screen.getByRole('link', { name: 'naovixen' })).toHaveProperty('pathname', '/');
    });
});
