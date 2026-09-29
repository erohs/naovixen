import { beforeEach, describe, expect, test } from 'vitest';

import { ThemePreference } from '../../enums/ThemePreference';
import type { IThemeStorage } from '../../interfaces/IThemeStorage';
import { NoOpThemeStorage } from '../NoOpThemeStorage';

describe('Using NoOpThemeStorage', () => {
    let storage: IThemeStorage;

    beforeEach(() => {
        storage = new NoOpThemeStorage();
    });

    describe('when the preference is read', () => {
        test('then it should report no preference', () => {
            expect(storage.readPreference()).toBeUndefined();
        });
    });

    describe('when dark is written', () => {
        test('then it should still report no preference', () => {
            storage.writePreference(ThemePreference.Dark);

            expect(storage.readPreference()).toBeUndefined();
        });
    });
});
