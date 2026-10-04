import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { describe, expect, test } from "vitest";

const read = (path: string): string => readFileSync(new URL(path, import.meta.url), "utf8");

describe("Using the menu hand-off script, when it is inlined in the head", () => {
    test("then the content security policy in public/_headers should allow it", () => {
        const hash = createHash("sha256").update(read("./menu-handoff.js")).digest("base64");
        expect(read("../../public/_headers")).toContain(`'sha256-${hash}'`);
    });
});
