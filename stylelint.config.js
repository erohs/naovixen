/**
 * Stylelint configuration.
 *
 * Two patterns do the real work here: class names must be `nx-` prefixed BEM, and custom
 * properties must be category-first in the styles package, where the design tokens live.
 */

/** `nx-block__element--modifier`, with every part kebab-case and both parts optional. */
const bemClassPattern =
  '^nx-[a-z0-9]+(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$';

/** The token categories from `.claude/rules/styles.md`. */
const tokenCategories = [
  'color',
  'font-family',
  'font-size',
  'font-weight',
  'line-height',
  'letter-spacing',
  'space',
  'size',
  'radius',
  'border-width',
  'shadow',
  'duration',
  'easing',
  'layout',
  'breakpoint',
  'z-index',
];

const tokenPattern = `^(${tokenCategories.join('|')})-[a-z0-9]+(-[a-z0-9]+)*$`;

/** Component-scoped properties are kebab-case and lead with their block name. */
const componentPropertyPattern = '^[a-z0-9]+(-[a-z0-9]+)*$';

export default {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/.output/**', 'design-reference/**'],
  rules: {
    'selector-class-pattern': [
      bemClassPattern,
      {
        message: (selector) =>
          `Expected "${selector}" to be nx- prefixed BEM, for example .nx-project-card__title--featured`,
      },
    ],

    'custom-property-pattern': [
      componentPropertyPattern,
      {
        message: (property) => `Expected "--${property}" to be kebab-case`,
      },
    ],

    // Logical properties throughout, so the layout follows the writing direction.
    'property-disallowed-list': [
      ['margin-left', 'margin-right', 'padding-left', 'padding-right'],
      {
        message: 'Use logical properties: margin-inline-start / padding-inline-end and friends.',
      },
    ],

    // Layer order settles precedence, so nothing should need to shout.
    'declaration-no-important': true,
  },

  overrides: [
    {
      // Global design tokens lead with their category, so they sort and read as a scale.
      files: ['packages/theming/src/generated/*.css'],
      rules: {
        'custom-property-pattern': [
          tokenPattern,
          {
            message: (property) =>
              `Expected "--${property}" to start with a token category: ${tokenCategories.join(', ')}`,
          },
        ],
      },
    },
  ],
};
