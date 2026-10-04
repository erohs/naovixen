import type { IProjectSummary } from "@naovixen/cms";
import { describe, expect, test } from "vitest";
import { findPreviousProject } from "../functions/FindPreviousProject.function";

const createSummary = (slug: string): IProjectSummary => ({
    slug,
    title: slug,
    summary: "",
    stack: [],
    isFeatured: false,
});

const projects = [createSummary("first"), createSummary("second"), createSummary("last")];

describe("Using findPreviousProject, when asked for the project before the last", () => {
    test("then it should return the second", () => {
        expect(findPreviousProject(projects, "last")?.slug).toBe("second");
    });
});

describe("Using findPreviousProject, when asked for the project before the first", () => {
    test("then it should wrap round to the last", () => {
        expect(findPreviousProject(projects, "first")?.slug).toBe("last");
    });
});

describe("Using findPreviousProject, when there are only two projects", () => {
    test("then it should return nothing, leaving the other project to the next link", () => {
        expect(findPreviousProject(projects.slice(0, 2), "first")).toBeUndefined();
    });
});
