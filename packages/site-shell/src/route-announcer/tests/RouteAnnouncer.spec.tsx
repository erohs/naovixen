import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { RouteAnnouncer } from '../RouteAnnouncer.component';

describe('Using RouteAnnouncer', () => {
    describe('when given a message', () => {
        test('then it should hold the message in a status region', () => {
            render(<RouteAnnouncer message="About — Naomi Shore" />);

            expect(screen.getByRole('status').textContent).toBe('About — Naomi Shore');
        });

        test('then it should have no axe violations', async () => {
            render(<RouteAnnouncer message="About — Naomi Shore" />);

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});
