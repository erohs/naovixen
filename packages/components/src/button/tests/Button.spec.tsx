import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Button } from '../Button.component';

describe('Using Button, given no type, when it renders', () => {
    test('then it should not submit a surrounding form', () => {
        render(<Button>Save</Button>);

        expect(screen.getByRole('button')).toHaveProperty('type', 'button');
    });
});
