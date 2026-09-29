import type { ButtonVariant } from '../enums/ButtonVariant';

export function buildButtonClassName(variant: ButtonVariant): string {
  return `nx-button nx-button--${variant}`;
}
