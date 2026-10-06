import { describe, expect, test } from "vitest";
import { adjacentProjects, inOrder, type IProjectSummary } from "./projects";

const project = (id: string, order: number): IProjectSummary => ({ id, data: { order } });
const three = inOrder([project("third", 3), project("first", 1), project("second", 2)]);

describe("Using inOrder, when given projects in any order", () => {
    test("then it should sort them by the editor's order", () => {
        expect(three.map((each) => each.id)).toEqual(["first", "second", "third"]);
    });
});

describe("Using adjacentProjects, given three projects, when asked about the first", () => {
    test("then it should wrap round to the last for previous", () => {
        expect(adjacentProjects(three, "first").previous?.id).toBe("third");
    });

    test("then it should offer the second as next", () => {
        expect(adjacentProjects(three, "first").next?.id).toBe("second");
    });
});

describe("Using adjacentProjects, given two projects, when asked about the second", () => {
    test("then it should offer no previous, which would lead to the same place as next", () => {
        expect(adjacentProjects(three.slice(0, 2), "second").previous).toBeUndefined();
    });

    test("then it should wrap round to the first for next", () => {
        expect(adjacentProjects(three.slice(0, 2), "second").next?.id).toBe("first");
    });
});

describe("Using adjacentProjects, given one project, when asked about it", () => {
    test("then it should offer neither neighbour", () => {
        expect(adjacentProjects(three.slice(0, 1), "first")).toEqual({ previous: undefined, next: undefined });
    });
});
