import { describe, expect, it } from "vitest";
import { adjacentProjects, inOrder, type ProjectSummary } from "./projects";

const project = (id: string, order: number): ProjectSummary => ({ id, data: { order } });
const three = inOrder([project("third", 3), project("first", 1), project("second", 2)]);

describe("inOrder", () => {
    it("sorts by the editor's order", () => {
        expect(three.map((each) => each.id)).toEqual(["first", "second", "third"]);
    });
});

describe("adjacentProjects", () => {
    it("wraps at both ends", () => {
        const { previous, next } = adjacentProjects(three, "first");
        expect([previous?.id, next?.id]).toEqual(["third", "second"]);
    });

    it("offers only next when there are two", () => {
        const { previous, next } = adjacentProjects(three.slice(0, 2), "second");
        expect([previous, next?.id]).toEqual([undefined, "first"]);
    });

    it("offers neither when there is one", () => {
        expect(adjacentProjects(three.slice(0, 1), "first")).toEqual({ previous: undefined, next: undefined });
    });
});
