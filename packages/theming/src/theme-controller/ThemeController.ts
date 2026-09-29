import type { ThemePreference } from '../enums/ThemePreference';
import type { ISystemThemeSource } from '../interfaces/ISystemThemeSource';
import type { IThemeController } from '../interfaces/IThemeController';
import type { IThemeStorage } from '../interfaces/IThemeStorage';
import { defaultThemePreference } from './constants/DefaultThemePreference.const';
import { resolveTheme } from './functions/ResolveTheme.function';
import type { IThemeState } from './interfaces/IThemeState';

/** Listens to the system only while it has subscribers. */
export class ThemeController implements IThemeController {
    private readonly _storage: IThemeStorage;
    private readonly _systemThemeSource: ISystemThemeSource;
    private readonly _listeners = new Set<() => void>();
    private _stopListeningToSystem: (() => void) | undefined;
    private _state: IThemeState;

    public constructor(storage: IThemeStorage, systemThemeSource: ISystemThemeSource) {
        this._storage = storage;
        this._systemThemeSource = systemThemeSource;
        this._state = this._buildState(storage.readPreference() ?? defaultThemePreference);
    }

    public readonly getState = (): IThemeState => this._state;

    public readonly subscribe = (listener: () => void): (() => void) => {
        this._listeners.add(listener);
        this._stopListeningToSystem ??= this._systemThemeSource.subscribe(
            this._onSystemThemeChange,
        );

        return () => {
            this._removeListener(listener);
        };
    };

    public readonly setPreference = (preference: ThemePreference): void => {
        this._storage.writePreference(preference);
        this._updateState(this._buildState(preference));
    };

    private readonly _onSystemThemeChange = (): void => {
        this._updateState(this._buildState(this._state.preference));
    };

    private _removeListener(listener: () => void): void {
        this._listeners.delete(listener);

        if (this._listeners.size === 0) {
            this._stopListeningToSystem?.();
            this._stopListeningToSystem = undefined;
        }
    }

    private _buildState(preference: ThemePreference): IThemeState {
        const systemTheme = this._systemThemeSource.getTheme();

        return { preference, resolvedTheme: resolveTheme(preference, systemTheme) };
    }

    /** A new state object only on a real change, or React would re-render for nothing. */
    private _updateState(nextState: IThemeState): void {
        const isUnchanged =
            nextState.preference === this._state.preference &&
            nextState.resolvedTheme === this._state.resolvedTheme;

        if (isUnchanged) {
            return;
        }

        this._state = nextState;
        this._listeners.forEach((listener) => {
            listener();
        });
    }
}
