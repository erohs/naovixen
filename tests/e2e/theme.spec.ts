import { expect, test } from "@playwright/test";

test("switches the theme, and remembers the choice", async ({ page, javaScriptEnabled }) => {
    test.skip(!javaScriptEnabled, "Switching needs script.");
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto("/");
    const toggle = page.locator("header > .bar").getByRole("button", { name: "Dark mode" });
    await expect(toggle).toHaveAttribute("aria-pressed", "false");
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-pressed", "true");
    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("follows the system setting, with no switch, when script is off", async ({ page, javaScriptEnabled }) => {
    test.skip(javaScriptEnabled, "Only without script.");
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/");
    await expect(page.getByRole("button", { name: "Dark mode" })).toHaveCount(0);
    const background = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(background).toBe("rgb(43, 29, 20)");
});
