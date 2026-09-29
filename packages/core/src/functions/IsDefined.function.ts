/**
 * Narrows a value that may be absent to one that is present.
 *
 * `noUncheckedIndexedAccess` is on, so array and record lookups are typed as possibly
 * `undefined`. This is the type guard that clears that up, and it reads better as a
 * filter predicate than an inline arrow does.
 *
 * @param value The value to check.
 * @returns `true` when the value is neither `null` nor `undefined`.
 */
export function isDefined<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}
