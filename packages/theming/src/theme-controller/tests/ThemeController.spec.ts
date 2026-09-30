import { beforeEach, describe, expect, test, vi } from 'vitest';

import { ResolvedTheme } from '../../enums/ResolvedTheme';
import { ThemePreference } from '../../enums/ThemePreference';
import type { ISystemThemeSource } from '../../interfaces/ISystemThemeSource';
import type { IThemeStorage } from '../../interfaces/IThemeStorage';
import { ThemeController } from '../ThemeController';

class FakeThemeStorage implements IThemeStorage {
    public storedPreference: ThemePreference | undefined;

    public constructor(storedPreference?: ThemePreference) {
        this.storedPreference = storedPreference;
    }

    public readPreference(): ThemePreference | undefined {
        return this.storedPreference;
    }

    public writePreference(preference: ThemePreference): void {
        this.storedPreference = preference;
    }
}

class FakeSystemThemeSource implements ISystemThemeSource {
    private readonly _listeners = new Set<() => void>();
    private _theme: ResolvedTheme;

    public constructor(theme: ResolvedTheme) {
        this._theme = theme;
    }

    public get listenerCount(): number {
        return this._listeners.size;
    }

    public getTheme(): ResolvedTheme {
        return this._theme;
    }

    public subscribe(listener: () => void): () => void {
        this._listeners.add(listener);

        return () => {
            this._listeners.delete(listener);
        };
    }

    public switchTo(theme: ResolvedTheme): void {
        this._theme = theme;
        this._listeners.forEach((listener) => {
            listener();
        });
    }
}

let storage: FakeThemeStorage;
let systemThemeSource: FakeSystemThemeSource;
let themeController: ThemeController;

function createThemeController(
    storedPreference: ThemePreference | undefined,
    systemTheme: ResolvedTheme,
): void {
    storage = new FakeThemeStorage(storedPreference);
    systemThemeSource = new FakeSystemThemeSource(systemTheme);
    themeController = new ThemeController(storage, systemThemeSource);
}

describe('Using ThemeController, given no stored preference and a dark system theme, when the state is read', () => {
    beforeEach(() => {
        createThemeController(undefined, ResolvedTheme.Dark);
    });

    test('then it should report the preference as system', () => {
        expect(themeController.getState().preference).toBe(ThemePreference.System);
    });

    test('then it should resolve to the dark theme', () => {
        expect(themeController.getState().resolvedTheme).toBe(ResolvedTheme.Dark);
    });

    test('then it should return the same state object until something changes', () => {
        expect(themeController.getState()).toBe(themeController.getState());
    });
});

describe('Using ThemeController, given no stored preference and a dark system theme, when the preference is set to light', () => {
    beforeEach(() => {
        createThemeController(undefined, ResolvedTheme.Dark);
        themeController.setPreference(ThemePreference.Light);
    });

    test('then it should resolve to the light theme', () => {
        expect(themeController.getState().resolvedTheme).toBe(ResolvedTheme.Light);
    });

    test('then it should persist light to storage', () => {
        expect(storage.storedPreference).toBe(ThemePreference.Light);
    });
});

describe('Using ThemeController, given a stored preference of dark and a light system theme, when the state is read', () => {
    beforeEach(() => {
        createThemeController(ThemePreference.Dark, ResolvedTheme.Light);
    });

    test('then it should resolve to the stored dark theme', () => {
        expect(themeController.getState().resolvedTheme).toBe(ResolvedTheme.Dark);
    });
});

describe('Using ThemeController, given a stored preference of dark and a light system theme, when the system switches to dark while subscribed', () => {
    beforeEach(() => {
        createThemeController(ThemePreference.Dark, ResolvedTheme.Light);
    });

    test('then it should not notify the subscriber', () => {
        const listener = vi.fn();
        themeController.subscribe(listener);

        systemThemeSource.switchTo(ResolvedTheme.Dark);

        expect(listener).not.toHaveBeenCalled();
    });
});

describe('Using ThemeController, given the preference follows a light system, when the system switches to dark while subscribed', () => {
    let listener: () => void;

    beforeEach(() => {
        listener = vi.fn();
        createThemeController(ThemePreference.System, ResolvedTheme.Light);
        themeController.subscribe(listener);
        systemThemeSource.switchTo(ResolvedTheme.Dark);
    });

    test('then it should notify the subscriber once', () => {
        expect(listener).toHaveBeenCalledOnce();
    });

    test('then it should resolve to the dark theme', () => {
        expect(themeController.getState().resolvedTheme).toBe(ResolvedTheme.Dark);
    });
});

describe('Using ThemeController, given the preference follows a light system, when the preference is set to the one it already has', () => {
    beforeEach(() => {
        createThemeController(ThemePreference.System, ResolvedTheme.Light);
    });

    test('then it should not notify the subscriber', () => {
        const listener = vi.fn();
        themeController.subscribe(listener);

        themeController.setPreference(ThemePreference.System);

        expect(listener).not.toHaveBeenCalled();
    });
});

describe('Using ThemeController, given the preference follows a light system, when the only subscriber unsubscribes', () => {
    let listener: () => void;

    beforeEach(() => {
        listener = vi.fn();
        createThemeController(ThemePreference.System, ResolvedTheme.Light);
        const unsubscribe = themeController.subscribe(listener);
        unsubscribe();
    });

    test('then it should stop listening to the system', () => {
        expect(systemThemeSource.listenerCount).toBe(0);
    });

    test('then it should no longer notify that subscriber', () => {
        themeController.setPreference(ThemePreference.Dark);

        expect(listener).not.toHaveBeenCalled();
    });
});

describe('Using ThemeController, given the preference follows a light system, when one of two subscribers unsubscribes', () => {
    beforeEach(() => {
        createThemeController(ThemePreference.System, ResolvedTheme.Light);
    });

    test('then it should keep listening to the system', () => {
        themeController.subscribe(vi.fn());
        const unsubscribe = themeController.subscribe(vi.fn());
        unsubscribe();

        expect(systemThemeSource.listenerCount).toBe(1);
    });
});
