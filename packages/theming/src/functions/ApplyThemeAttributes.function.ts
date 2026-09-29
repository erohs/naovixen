import type { IAttributeTarget } from '../interfaces/IAttributeTarget';
import type { IThemeState } from '../theme-controller/interfaces/IThemeState';

/** The token stylesheet selects on `data-theme`; `data-theme-preference` records the choice. */
export function applyThemeAttributes(state: IThemeState, target: IAttributeTarget): void {
    target.setAttribute('data-theme', state.resolvedTheme);
    target.setAttribute('data-theme-preference', state.preference);
}
