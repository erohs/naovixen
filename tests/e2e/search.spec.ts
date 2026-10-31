import { expect, test } from "@playwright/test";

test("narrows the posts as words are typed, and says how many", async ({ page, javaScriptEnabled }) => {
    test.skip(!javaScriptEnabled, "Searching needs script.");
    await page.goto("/blog/");
    await page.getByLabel("Search posts").fill("radio");
    await expect(page.locator("[data-summary]")).toHaveText("Showing 2 of 10 posts matching “radio”");
    await expect(page.locator("[data-post-id]:visible")).toHaveCount(2);
    await expect(page).toHaveURL(/\?query=radio$/);
});

test("takes up a search from the address", async ({ page, javaScriptEnabled }) => {
    test.skip(!javaScriptEnabled, "Searching needs script.");
    await page.goto("/blog/?topics=CSS");
    await expect(page.locator("[data-summary]")).toHaveText("Showing 2 of 10 posts tagged CSS");
    await page.getByRole("button", { name: "CSS, remove filter" }).click();
    await expect(page.locator("[data-summary]")).toHaveText("10 posts");
    await expect(page.getByLabel("Search posts")).toBeFocused();
});

test("offers topic pages instead when script is off", async ({ page, javaScriptEnabled }) => {
    test.skip(javaScriptEnabled, "Only without script.");
    await page.goto("/blog/");
    await expect(page.getByRole("search")).toHaveCount(0);
    await page.getByRole("navigation", { name: "Topics" }).getByRole("link", { name: /^CSS/ }).click();
    await expect(page).toHaveURL(/\/blog\/topics\/css\/$/);
});
