/**
 * UTC because a date-only ISO string parses as UTC midnight. In any other zone the server
 * and a reader west of Greenwich would disagree about the day.
 */
export const longDateFormat: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
};
