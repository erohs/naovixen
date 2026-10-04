import { longDateFormat } from "../constants/LongDateFormat.const";
import { translator } from "../constants/Translator.const";

/** `2026-09-02` becomes `2 September 2026` in en-GB. Throws a RangeError for an unparseable date. */
export const formatDate = (isoDate: string): string =>
    new Intl.DateTimeFormat(translator.language, longDateFormat).format(new Date(isoDate));
