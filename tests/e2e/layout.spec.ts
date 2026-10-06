import { expect, test } from "@playwright/test";
import { routes } from "./routes";

for (const route of routes) {
    test(`${route} ends at its footer`, async ({ page }) => {
        await page.goto(route);
        const below = await page.evaluate(
            () =>
                document.documentElement.scrollHeight -
                (document.querySelector("footer")?.getBoundingClientRect().bottom ?? 0) -
                scrollY,
        );
        expect(below).toBeLessThan(1);
    });
}

test("back to top settles level with the footer's buttons", async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => scrollTo({ top: document.documentElement.scrollHeight, behavior: "instant" }));
    const bottoms = await page.evaluate(() =>
        [document.querySelector('a[href="#top"]'), document.querySelector("footer .button")].map((element) =>
            Math.round(element?.getBoundingClientRect().bottom ?? 0),
        ),
    );
    expect(bottoms[0]).toBe(bottoms[1]);
});

test("back to top shows itself when it takes focus before it has scrolled into view", async ({ page, browserName }) => {
    test.skip(browserName === "webkit", "Playwright's WebKit does not tab to links; check by hand in Safari.");
    await page.goto("/");
    await page.locator("footer").getByRole("link").last().focus();
    await page.keyboard.press("Tab");
    const backToTop = page.getByRole("link", { name: "Back to top" });
    await expect(backToTop).toBeFocused();
    await expect(backToTop).toBeInViewport();
});
