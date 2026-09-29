import type { AnyRouter } from '@tanstack/react-router';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { RouterPageChangeSource } from '../RouterPageChangeSource';

interface IRenderedEvent {
    readonly fromLocation?: object;
    readonly pathChanged: boolean;
}

describe('Using RouterPageChangeSource', () => {
    let subscribedEventType: string;
    let emitRendered: (event: IRenderedEvent) => void;
    let listener: () => void;

    beforeEach(() => {
        const router = {
            subscribe: (eventType: string, emit: (event: IRenderedEvent) => void) => {
                subscribedEventType = eventType;
                emitRendered = emit;

                return () => undefined;
            },
        } as unknown as Pick<AnyRouter, 'subscribe'>;
        listener = vi.fn();
        new RouterPageChangeSource(router).subscribe(listener);
    });

    describe('when it subscribes', () => {
        test('then it should wait for navigations to finish rendering', () => {
            expect(subscribedEventType).toBe('onRendered');
        });
    });

    describe('when the first page renders', () => {
        test('then it should not report a page change', () => {
            emitRendered({ pathChanged: true });

            expect(listener).not.toHaveBeenCalled();
        });
    });

    describe('when a navigation to another path renders', () => {
        test('then it should report a page change', () => {
            emitRendered({ fromLocation: {}, pathChanged: true });

            expect(listener).toHaveBeenCalledOnce();
        });
    });

    describe('when a navigation that only changes the hash renders', () => {
        test('then it should not report a page change', () => {
            emitRendered({ fromLocation: {}, pathChanged: false });

            expect(listener).not.toHaveBeenCalled();
        });
    });
});
