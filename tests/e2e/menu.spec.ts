import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 390, height: 760 } });

test.beforeEach(async ({ page }) => {
    await page.goto("/about/");
});

test("opens over the page, which becomes inert, and closes with Escape", async ({ page }) => {
    const menuButton = page.getByRole("button", { name: "Menu", exact: true });
    await menuButton.focus();
    await page.keyboard.press("Enter");

    const menu = page.getByRole("dialog", { name: "Menu" });
    await expect(menu).toBeVisible();
    await expect(page.getByRole("button", { name: "Close menu" })).toBeFocused();
    expect(await page.evaluate(() => document.elementFromPoint(10, 700)?.closest("dialog") !== null)).toBe(true);

    await page.keyboard.press("Escape");
    await expect(menu).toBeHidden();
    await expect(menuButton).toBeFocused();
});

test("closes from its own close button", async ({ page }) => {
    await page.getByRole("button", { name: "Menu", exact: true }).click();
    await page.getByRole("button", { name: "Close menu" }).click();
    await expect(page.getByRole("dialog", { name: "Menu" })).toBeHidden();
});

test("leads to the page chosen", async ({ page }) => {
    await page.getByRole("button", { name: "Menu", exact: true }).click();
    await page.getByRole("dialog").getByRole("link", { name: "Blog" }).click();
    await expect(page).toHaveURL(/\/blog\/$/);
    await expect(page.getByRole("dialog", { name: "Menu" })).toBeHidden();
});

test("slides away over the new page after a link is followed", async ({ page, javaScriptEnabled }) => {
    test.skip(!javaScriptEnabled, "The hand-off is the one thing that needs script.");
    await page.getByRole("button", { name: "Menu", exact: true }).click();
    await page.getByRole("dialog").getByRole("link", { name: "Work" }).click();
    await page.waitForURL(/\/work\/$/);
    const isLeaving = await page.evaluate(() => "menuLeaving" in document.documentElement.dataset);
    expect(isLeaving).toBe(true);
    await expect.poll(() => page.evaluate(() => "menuLeaving" in document.documentElement.dataset)).toBe(false);
});
