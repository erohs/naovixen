const longDate = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/** "4 October 2026". Content dates carry no time, so they are read in UTC to stay on their day. */
export const formatDate = (date: Date): string => longDate.format(date);

/** The machine-readable form for a time element's datetime attribute. */
export const isoDate = (date: Date): string => date.toISOString().slice(0, 10);
