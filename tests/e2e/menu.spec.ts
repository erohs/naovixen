import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 390, height: 760 } });

/**
 * With script off, Playwright's own timers stop, so it cannot wait for an element to stop moving
 * before clicking. Clicks are forced instead; the menu needs no script to respond to them.
 */
const click = { force: true };

test.beforeEach(async ({ page }) => {
    await page.goto("/about/");
});

test("opens over the page, which becomes inert, and closes with Escape", async ({
    page,
    browserName,
    javaScriptEnabled,
}) => {
    const menuButton = page.getByRole("button", { name: "Menu", exact: true });
    await menuButton.focus();
    await page.keyboard.press("Enter");

    const menu = page.getByRole("dialog", { name: "Menu" });
    await expect(menu).toBeVisible();
    if (javaScriptEnabled || browserName !== "webkit") {
        // Without script, Safari gives an opening dialog that was hidden while closed no focus.
        await expect(page.getByRole("button", { name: "Close menu" })).toBeFocused();
    }
    expect(await page.evaluate(() => document.elementFromPoint(10, 700)?.closest("dialog") !== null)).toBe(true);

    await page.keyboard.press("Escape");
    await expect(menu).toBeHidden();
    await expect(menuButton).toBeFocused();
});

test("closes from its own close button", async ({ page }) => {
    await page.getByRole("button", { name: "Menu", exact: true }).click(click);
    await page.getByRole("button", { name: "Close menu" }).click(click);
    await expect(page.getByRole("dialog", { name: "Menu" })).toBeHidden();
});

test("leads to the page chosen", async ({ page }) => {
    await page.getByRole("button", { name: "Menu", exact: true }).click(click);
    await page.waitForTimeout(800); // until its links have slid into view
    await page.getByRole("dialog").getByRole("link", { name: "Blog" }).click(click);
    await expect(page).toHaveURL(/\/blog\/$/);
    await expect(page.getByRole("dialog", { name: "Menu" })).toBeHidden();
});

test("keeps sliding closed across the change of page after a link is followed", async ({ page, javaScriptEnabled }) => {
    test.skip(!javaScriptEnabled, "Without script the new page simply arrives with the menu closed.");
    await page.getByRole("button", { name: "Menu", exact: true }).click();
    await page.getByRole("dialog").getByRole("link", { name: "Work" }).click();
    await page.waitForURL(/\/work\/$/);
    await expect(page.getByRole("dialog", { name: "Menu" })).toBeHidden();
    await expect.poll(() => page.evaluate(() => "menuClosing" in document.documentElement.dataset)).toBe(false);
});

test("keeps focus inside, wrapping from its last control to its first", async ({
    page,
    browserName,
    javaScriptEnabled,
}) => {
    test.skip(!javaScriptEnabled, "Wrapping needs script; without it the browser's toolbar follows.");
    test.skip(browserName === "webkit", "Playwright's WebKit does not tab to links; check by hand in Safari.");
    await page.getByRole("button", { name: "Menu", exact: true }).focus();
    await page.keyboard.press("Enter");
    await page
        .getByRole("dialog")
        .getByRole("link", { name: /Bluesky/ })
        .focus();
    await page.keyboard.press("Tab");
    await expect(page.getByRole("dialog").getByRole("link", { name: "naovixen", exact: true })).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(page.getByRole("dialog").getByRole("link", { name: /Bluesky/ })).toBeFocused();
});
