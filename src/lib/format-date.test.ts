import { describe, expect, it } from "vitest";
import { formatDate, isoDate } from "./format-date";

describe("formatDate", () => {
    it("writes the day, the month in full and the year", () => {
        expect(formatDate(new Date("2026-10-04"))).toBe("4 October 2026");
    });
});

describe("isoDate", () => {
    it("keeps only the date", () => {
        expect(isoDate(new Date("2026-10-04"))).toBe("2026-10-04");
    });
});
