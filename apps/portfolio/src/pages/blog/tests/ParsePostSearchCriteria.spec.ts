import { describe, expect, test } from "vitest";
import { parsePostSearchCriteria } from "../functions/ParsePostSearchCriteria.function";

describe("Using parsePostSearchCriteria, given an address with no search, when it is read", () => {
    test("then it should find no words and no topics", () => {
        expect(parsePostSearchCriteria({})).toEqual({ query: "", topics: [] });
    });
});

describe("Using parsePostSearchCriteria, given a single topic, when it is read", () => {
    test("then it should treat it as a list of one", () => {
        expect(parsePostSearchCriteria({ topics: "CSS" }).topics).toEqual(["CSS"]);
    });
});

describe("Using parsePostSearchCriteria, given words the router read as a number, when it is read", () => {
    test("then it should keep them as words", () => {
        expect(parsePostSearchCriteria({ query: 404 }).query).toBe("404");
    });
});

describe("Using parsePostSearchCriteria, given topics that are not words, when it is read", () => {
    test("then it should drop them", () => {
        expect(parsePostSearchCriteria({ topics: ["CSS", "", { a: 1 }] }).topics).toEqual(["CSS"]);
    });
});
