import { beforeEach, describe, expect, test, vi } from 'vitest';

import { ResolvedTheme } from '../../enums/ResolvedTheme';
import type { IMediaQueryList } from '../interfaces/IMediaQueryList';
import { MediaQuerySystemThemeSource } from '../MediaQuerySystemThemeSource';

class FakeMediaQueryList implements IMediaQueryList {
    public readonly query: string;
    public matches: boolean;
    private readonly _listeners = new Set<() => void>();

    public constructor(query: string, matches: boolean) {
        this.query = query;
        this.matches = matches;
    }

    public addEventListener(_type: 'change', listener: () => void): void {
        this._listeners.add(listener);
    }

    public removeEventListener(_type: 'change', listener: () => void): void {
        this._listeners.delete(listener);
    }

    public change(matches: boolean): void {
        this.matches = matches;
        this._listeners.forEach((listener) => {
            listener();
        });
    }
}

let mediaQueryList: FakeMediaQueryList | undefined;
let systemThemeSource: MediaQuerySystemThemeSource;

function createSourceOnADarkSystem(): void {
    systemThemeSource = new MediaQuerySystemThemeSource((query) => {
        mediaQueryList = new FakeMediaQueryList(query, true);
        return mediaQueryList;
    });
}

describe('Using MediaQuerySystemThemeSource, given the system prefers a dark colour scheme, when the theme is read', () => {
    beforeEach(createSourceOnADarkSystem);

    test('then it should report the dark theme', () => {
        expect(systemThemeSource.getTheme()).toBe(ResolvedTheme.Dark);
    });

    test('then it should have asked about the dark colour scheme', () => {
        expect(mediaQueryList?.query).toBe('(prefers-color-scheme: dark)');
    });
});

describe('Using MediaQuerySystemThemeSource, given the system prefers a dark colour scheme, when the system switches to light while subscribed', () => {
    beforeEach(createSourceOnADarkSystem);

    test('then it should notify the subscriber', () => {
        const listener = vi.fn();
        systemThemeSource.subscribe(listener);

        mediaQueryList?.change(false);

        expect(listener).toHaveBeenCalledOnce();
    });

    test('then it should report the light theme', () => {
        mediaQueryList?.change(false);

        expect(systemThemeSource.getTheme()).toBe(ResolvedTheme.Light);
    });
});

describe('Using MediaQuerySystemThemeSource, given the system prefers a dark colour scheme, when the system switches after unsubscribing', () => {
    beforeEach(createSourceOnADarkSystem);

    test('then it should not notify the former subscriber', () => {
        const listener = vi.fn();
        const unsubscribe = systemThemeSource.subscribe(listener);
        unsubscribe();

        mediaQueryList?.change(false);

        expect(listener).not.toHaveBeenCalled();
    });
});
