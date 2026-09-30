import { longDateFormat } from '../constants/LongDateFormat.const';

/** `2026-09-02` becomes `2 September 2026`. Throws a RangeError for an unparseable date. */
export function formatDate(isoDate: string): string {
    return longDateFormat.format(new Date(isoDate));
}
