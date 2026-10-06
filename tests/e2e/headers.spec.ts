import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { expect, test } from "@playwright/test";

const policy = readFileSync(new URL("../../public/_headers", import.meta.url), "utf8");
const hashOf = (script: string): string => createHash("sha256").update(script).digest("base64");

test("every inline script, as built, is allowed by the content security policy", async ({ request }) => {
    test.skip(test.info().project.name !== "chromium", "The built HTML is the same in every engine; checked once.");
    const html = await (await request.get("/")).text();
    const inlineScripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(([, script]) => script ?? "");
    expect(inlineScripts.length).toBeGreaterThan(0);
    for (const script of inlineScripts) {
        expect(policy).toContain(`'sha256-${hashOf(script)}'`);
    }
});
