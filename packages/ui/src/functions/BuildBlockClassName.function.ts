import { classNamePrefix } from '@naovixen/styles';

/**
 * Builds the BEM block class name for a component.
 *
 * Every component's root element gets its class from here, so the `nx-` prefix is applied
 * in exactly one place and cannot drift from what Stylelint enforces.
 *
 * @param blockName The kebab-case block name, without a prefix — for example `project-card`.
 * @returns The prefixed block class name, for example `nx-project-card`.
 */
export function buildBlockClassName(blockName: string): string {
  return `${classNamePrefix}${blockName}`;
}
