import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { describe, expect, test } from "vitest";

const read = (path: string): string => readFileSync(new URL(path, import.meta.url), "utf8");
const hashOf = (path: string): string => createHash("sha256").update(read(path)).digest("base64");

describe("Using the scripts inlined in the head, when the content security policy is read", () => {
    test.each(["./apply-theme.js", "./menu.js"])("then it should allow %s by its hash", (path) => {
        expect(read("../../public/_headers")).toContain(`'sha256-${hashOf(path)}'`);
    });
});
