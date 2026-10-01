import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Button } from '../Button.component';
import { sunIcon } from '../../icon/icons/Sun.icon';

describe('Using Button, given no type, when it renders', () => {
    test('then it should not submit a surrounding form', () => {
        render(<Button>Save</Button>);

        expect(screen.getByRole('button')).toHaveProperty('type', 'button');
    });
});

describe('Using Button, given only an icon with a label, when it renders', () => {
    test('then it should be named by the label', () => {
        render(
            <Button>
                <Button.Icon source={sunIcon} label="Dark mode" />
            </Button>,
        );

        expect(screen.getByRole('button', { name: 'Dark mode' })).toBeDefined();
    });
});
