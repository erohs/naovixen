import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { routes } from "./routes";

const wcag = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

for (const route of routes) {
    test.describe(route, () => {
        test("is found, titled and canonical", async ({ page }) => {
            const response = await page.goto(route);
            expect(response?.status()).toBe(200);
            await expect(page).toHaveTitle(/Naomi Shore/);
            await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://naovixen.com${route}`);
            await expect(page.locator("h1")).toHaveCount(1);
        });

        test("carries structured data that parses", async ({ page }) => {
            await page.goto(route);
            const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
            expect(blocks.length).toBeGreaterThan(0);
            for (const block of blocks) {
                expect(() => JSON.parse(block) as unknown).not.toThrow();
            }
        });

        for (const colorScheme of ["light", "dark"] as const) {
            test(`has no accessibility violations in ${colorScheme} mode`, async ({ page }) => {
                await page.emulateMedia({ colorScheme, reducedMotion: "reduce" });
                await page.goto(route);
                const { violations } = await new AxeBuilder({ page }).withTags(wcag).analyze();
                expect(violations).toEqual([]);
            });
        }
    });
}

test("an unknown address answers with the not-found page", async ({ page }) => {
    const response = await page.goto("/no-such-page/");
    expect(response?.status()).toBe(404);
    await expect(page.locator("h1")).toHaveText("Page not found");
});
