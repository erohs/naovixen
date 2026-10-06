import { describe, expect, test } from "vitest";
import { formatDate, isoDate } from "./format-date";

describe("Using formatDate, when given a date", () => {
    test("then it should write the day, the month in full and the year", () => {
        expect(formatDate(new Date("2026-10-04"))).toBe("4 October 2026");
    });
});

describe("Using isoDate, when given a date", () => {
    test("then it should keep only the date", () => {
        expect(isoDate(new Date("2026-10-04"))).toBe("2026-10-04");
    });
});
