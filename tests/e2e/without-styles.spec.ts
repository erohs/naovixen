import { expect, test } from "@playwright/test";
import { routes } from "./routes";

/** Readers with page styles turned off get a plain document in the design's reading order. */
for (const route of routes) {
    test(`${route} reads cleanly without styles`, async ({ page }) => {
        await page.goto(route);
        await page.evaluate(() => {
            document.querySelectorAll('style, link[rel="stylesheet"]').forEach((sheet) => sheet.remove());
            document.querySelectorAll("[style]").forEach((element) => element.removeAttribute("style"));
        });

        const viewportWidth = page.viewportSize()?.width ?? 0;
        const tooWide = await page.evaluate(
            (width) =>
                [...document.querySelectorAll("svg")].filter((svg) => svg.getBoundingClientRect().width > width).length,
            viewportWidth,
        );
        expect(tooWide).toBe(0);
        await expect(page.getByRole("dialog")).toBeHidden();
        await expect(page.getByRole("navigation", { name: "Main" })).toHaveCount(1);
    });
}
