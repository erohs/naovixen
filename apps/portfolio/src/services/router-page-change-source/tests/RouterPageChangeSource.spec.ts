import type { AnyRouter } from '@tanstack/react-router';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { RouterPageChangeSource } from '../RouterPageChangeSource';

interface IRenderedEvent {
    readonly fromLocation?: object;
    readonly pathChanged: boolean;
}

interface ISubscribedRouter {
    readonly subscribedEventType: string;
    readonly emitRendered: (event: IRenderedEvent) => void;
    readonly listener: () => void;
}

function subscribeToFakeRouter(): ISubscribedRouter {
    let subscribedEventType = '';
    let emitRendered: (event: IRenderedEvent) => void = () => undefined;
    const router = {
        subscribe: (eventType: string, emit: (event: IRenderedEvent) => void) => {
            subscribedEventType = eventType;
            emitRendered = emit;

            return () => undefined;
        },
    } as unknown as Pick<AnyRouter, 'subscribe'>;
    const listener = vi.fn();
    new RouterPageChangeSource(router).subscribe(listener);

    return { subscribedEventType, emitRendered, listener };
}

describe('Using RouterPageChangeSource, when it subscribes', () => {
    test('then it should wait for navigations to finish rendering', () => {
        expect(subscribeToFakeRouter().subscribedEventType).toBe('onRendered');
    });
});

describe('Using RouterPageChangeSource, when the first page renders', () => {
    let subscribed: ISubscribedRouter;

    beforeEach(() => {
        subscribed = subscribeToFakeRouter();
    });

    test('then it should not report a page change', () => {
        subscribed.emitRendered({ pathChanged: true });

        expect(subscribed.listener).not.toHaveBeenCalled();
    });
});

describe('Using RouterPageChangeSource, when a navigation to another path renders', () => {
    let subscribed: ISubscribedRouter;

    beforeEach(() => {
        subscribed = subscribeToFakeRouter();
    });

    test('then it should report a page change', () => {
        subscribed.emitRendered({ fromLocation: {}, pathChanged: true });

        expect(subscribed.listener).toHaveBeenCalledOnce();
    });
});

describe('Using RouterPageChangeSource, when a navigation that only changes the hash renders', () => {
    let subscribed: ISubscribedRouter;

    beforeEach(() => {
        subscribed = subscribeToFakeRouter();
    });

    test('then it should not report a page change', () => {
        subscribed.emitRendered({ fromLocation: {}, pathChanged: false });

        expect(subscribed.listener).not.toHaveBeenCalled();
    });
});
