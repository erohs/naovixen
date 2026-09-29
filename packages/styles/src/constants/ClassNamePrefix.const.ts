/**
 * The prefix on every class name this project writes.
 *
 * It lives here rather than in `ui` because Stylelint, the token generator and the
 * component helpers all need the same answer, and `styles` is the only package all three
 * can depend on.
 */
export const classNamePrefix = 'nx-';
