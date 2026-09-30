import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '@naovixen/nvpack/testing';
import { SpeechBubbleTail } from '../enums/SpeechBubbleTail';
import { SpeechBubble } from '../SpeechBubble.component';

describe('Using SpeechBubble', () => {
    describe('given some words', () => {
        describe('when it renders', () => {
            test('then it should show the words as a paragraph', () => {
                render(<SpeechBubble>Example words</SpeechBubble>);

                expect(screen.getByRole('paragraph').textContent).toBe('Example words');
            });

            test('then it should have no accessibility violations', async () => {
                render(<SpeechBubble tail={SpeechBubbleTail.Top}>Example words</SpeechBubble>);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
