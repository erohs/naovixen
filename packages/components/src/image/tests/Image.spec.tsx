import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Image } from '../Image.component';

describe('Using Image, given no loading strategy, when it renders', () => {
    test('then it should wait to load until it nears the screen', () => {
        render(<Image src="/example.png" alt="Example picture" width={1600} height={900} />);

        expect(screen.getByRole('img').getAttribute('loading')).toBe('lazy');
    });
});
