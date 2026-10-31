import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 390, height: 760 } });

/**
 * With script off, Playwright's own timers stop, so it cannot wait for an element to stop moving
 * before clicking. Clicks are forced then; the menu needs no script to respond to them.
 */
const clickOptions = (javaScriptEnabled: boolean): { force?: boolean } => (javaScriptEnabled ? {} : { force: true });

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

test("closes from its own close button", async ({ page, javaScriptEnabled }) => {
    const click = clickOptions(javaScriptEnabled);
    await page.getByRole("button", { name: "Menu", exact: true }).click(click);
    await page.getByRole("button", { name: "Close menu" }).click(click);
    await expect(page.getByRole("dialog", { name: "Menu" })).toBeHidden();
});

test("leads to the page chosen", async ({ page, javaScriptEnabled }) => {
    const click = clickOptions(javaScriptEnabled);
    await page.getByRole("button", { name: "Menu", exact: true }).click(click);
    const blogLink = page.getByRole("dialog").getByRole("link", { name: "Blog" });
    // A forced click does not wait for the link to slide into view, so the test waits for it to settle.
    await expect(page.locator("#menu li").filter({ has: page.getByRole("link", { name: "Blog" }) })).toHaveCSS(
        "translate",
        "none",
    );
    await blogLink.click(click);
    await expect(page).toHaveURL(/\/blog\/$/);
    await expect(page.getByRole("dialog", { name: "Menu" })).toBeHidden();
});

test("changes the address while it is still closing, after a link is followed", async ({ page, javaScriptEnabled }) => {
    test.skip(!javaScriptEnabled, "Without script the new page simply arrives with the menu closed.");
    await page.getByRole("button", { name: "Menu", exact: true }).click();
    const workLink = page.getByRole("dialog").getByRole("link", { name: "Work" });
    await expect(workLink).toBeInViewport();
    // A 3s close, so a slow runner cannot finish the 0.5s slide before the page changes. The
    // style sits inside the menu, in the header, which the page change keeps.
    await page
        .locator("#menu")
        .evaluate((menu) =>
            menu.insertAdjacentHTML("afterbegin", "<style>#menu, #menu .sheet { transition-duration: 3s; }</style>"),
        );
    await workLink.click();
    await page.waitForURL(/\/work\/$/);
    await expect(page.locator("#menu .sheet")).toBeInViewport();
    await expect(page.getByRole("dialog", { name: "Menu" })).toBeHidden({ timeout: 10_000 });
});

test("shows the header's row once, never drawn twice, while it is open", async ({ page, javaScriptEnabled }) => {
    const click = clickOptions(javaScriptEnabled);
    await page.getByRole("button", { name: "Menu", exact: true }).click(click);
    // The page behind the open menu is inert, so a role query would miss its copy of the row.
    await expect(page.locator("a.home").filter({ visible: true })).toHaveCount(1);
});

test("leaves focus on the new page's content, not its own button, after a link is followed", async ({
    page,
    javaScriptEnabled,
}) => {
    test.skip(!javaScriptEnabled, "Without script the new page loads with focus at its start.");
    await page.getByRole("button", { name: "Menu", exact: true }).focus();
    await page.keyboard.press("Enter");
    await page.getByRole("dialog").getByRole("link", { name: "Blog" }).focus();
    await page.keyboard.press("Enter");
    await page.waitForURL(/\/blog\/$/);
    await expect(page.getByRole("main")).toBeFocused();
});

test("keeps the chosen theme and the blog search working after a link is followed", async ({
    page,
    javaScriptEnabled,
}) => {
    test.skip(!javaScriptEnabled, "Switching and searching need script.");
    await page.locator("header > .bar").getByRole("button", { name: "Dark mode" }).click();
    await page.getByRole("button", { name: "Menu", exact: true }).click();
    await page.getByRole("dialog").getByRole("link", { name: "Blog" }).click();
    await page.waitForURL(/\/blog\/$/);
    await expect(page.getByRole("dialog", { name: "Menu" })).toBeHidden();
    await page.getByLabel("Search posts").fill("radio");
    await expect(page.locator("[data-summary]")).toHaveText("Showing 2 of 10 posts matching “radio”");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("closes after every link followed, announcing only the latest page", async ({ page, javaScriptEnabled }) => {
    test.skip(!javaScriptEnabled, "Without script each page is a fresh load.");
    const menu = page.getByRole("dialog", { name: "Menu" });
    for (const [name, title] of [
        ["Work", /^Work/],
        ["Blog", /^Blog/],
        ["Contact", /^Contact/],
    ] as const) {
        await page.getByRole("button", { name: "Menu", exact: true }).click();
        await menu.getByRole("link", { name, exact: true }).click();
        await expect(page).toHaveTitle(title);
        await expect(menu).toBeHidden();
    }
    await expect(page.locator(".astro-route-announcer")).toHaveCount(1);
});

test("closes when the reader goes back a page", async ({ page, javaScriptEnabled }) => {
    test.skip(!javaScriptEnabled, "Without script going back loads the page afresh, with the menu closed.");
    const menuButton = page.getByRole("button", { name: "Menu", exact: true });
    await menuButton.click();
    await page.getByRole("dialog").getByRole("link", { name: "Work" }).click();
    await page.waitForURL(/\/work\/$/);
    await menuButton.click();
    await page.goBack();
    await expect(page).toHaveTitle(/^About/);
    await expect(page.getByRole("dialog", { name: "Menu" })).toBeHidden();
});

test("keeps focus inside, wrapping from its last control to its first", async ({
    page,
    browserName,
    javaScriptEnabled,
}) => {
    test.skip(!javaScriptEnabled, "Wrapping needs script; without it the browser's toolbar follows.");
    test.skip(
        browserName === "webkit",
        "Playwright's WebKit does not tab to links, so Chromium and Firefox cover this.",
    );
    await page.getByRole("button", { name: "Menu", exact: true }).focus();
    await page.keyboard.press("Enter");
    const lastLink = page.getByRole("dialog").getByRole("link").last();
    await lastLink.focus();
    await page.keyboard.press("Tab");
    await expect(page.getByRole("dialog").getByRole("link", { name: "naovixen", exact: true })).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(lastLink).toBeFocused();
});
