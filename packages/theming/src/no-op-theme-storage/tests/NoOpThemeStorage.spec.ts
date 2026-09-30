import { beforeEach, describe, expect, test } from 'vitest';

import { ThemePreference } from '../../enums/ThemePreference';
import type { IThemeStorage } from '../../interfaces/IThemeStorage';
import { NoOpThemeStorage } from '../NoOpThemeStorage';

let storage: IThemeStorage;

beforeEach(() => {
    storage = new NoOpThemeStorage();
});

describe('Using NoOpThemeStorage, when the preference is read', () => {
    test('then it should report no preference', () => {
        expect(storage.readPreference()).toBeUndefined();
    });
});

describe('Using NoOpThemeStorage, when dark is written', () => {
    test('then it should still report no preference', () => {
        storage.writePreference(ThemePreference.Dark);

        expect(storage.readPreference()).toBeUndefined();
    });
});
