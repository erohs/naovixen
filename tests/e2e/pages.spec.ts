import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";
import { routes } from "./routes";

const wcag = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

/**
 * Serves each page with its scripts removed, so it renders exactly as it does with script off
 * while axe, which needs script to run, can still scan it.
 */
const withoutPageScripts = async (page: Page): Promise<void> => {
    await page.route("**/*", async (route) => {
        if (route.request().resourceType() !== "document") return route.continue();
        const response = await route.fetch();
        const body = (await response.text()).replace(/<script\b(?![^>]*application\/ld\+json)[\s\S]*?<\/script>/g, "");
        return route.fulfill({ response, body });
    });
};

const checkAccessibility = (route: string, colorScheme: "light" | "dark", hasScripts: boolean): void => {
    const scripts = hasScripts ? "with" : "without";
    test(`has no accessibility violations in ${colorScheme} mode ${scripts} its scripts`, async ({
        page,
        javaScriptEnabled,
    }) => {
        test.skip(!javaScriptEnabled, "axe needs script; the page without its scripts is scanned instead.");
        if (!hasScripts) await withoutPageScripts(page);
        await page.emulateMedia({ colorScheme, reducedMotion: "reduce" });
        await page.goto(route);
        const { violations } = await new AxeBuilder({ page }).withTags(wcag).analyze();
        expect(violations).toEqual([]);
    });
};

const checkBasics = (route: string): void => {
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
};

for (const route of routes) {
    test.describe(route, () => {
        checkBasics(route);
        for (const colorScheme of ["light", "dark"] as const) {
            checkAccessibility(route, colorScheme, true);
            checkAccessibility(route, colorScheme, false);
        }
    });
}

test("an unknown address answers with the not-found page", async ({ page }) => {
    const response = await page.goto("/no-such-page/");
    expect(response?.status()).toBe(404);
    await expect(page.locator("h1")).toHaveText("Page not found");
});
