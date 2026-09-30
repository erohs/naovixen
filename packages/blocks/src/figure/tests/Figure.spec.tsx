import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Figure } from '../Figure.component';

const image = {
    src: '/example.png',
    alt: 'Example project home page',
    width: 1600,
    height: 900,
};

describe('Using Figure, given an image and a caption, when it renders', () => {
    test('then it should show the caption inside the figure', () => {
        render(<Figure image={image} caption="The home page." />);

        expect(screen.getByRole('figure').textContent).toBe('The home page.');
    });
});
