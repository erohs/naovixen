import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const read = (path: string): string => readFileSync(new URL(path, import.meta.url), "utf8");

describe("the menu hand-off script", () => {
    it("is allowed by the content security policy in public/_headers", () => {
        const hash = createHash("sha256").update(read("./menu-handoff.js")).digest("base64");
        expect(read("../../public/_headers")).toContain(`'sha256-${hash}'`);
    });
});
