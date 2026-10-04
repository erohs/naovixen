import { defineConfig, devices } from "@playwright/test";

/** Its own port, so the tests never reuse a running dev server instead of the built site. */
const port = 4329;

const engines = [
    { name: "chromium", device: devices["Desktop Chrome"] },
    { name: "firefox", device: devices["Desktop Firefox"] },
    { name: "webkit", device: devices["Desktop Safari"] },
];

export default defineConfig({
    testDir: "tests/e2e",
    fullyParallel: true,
    forbidOnly: Boolean(process.env["CI"]),
    use: { baseURL: `http://localhost:${port}` },
    webServer: {
        command: `pnpm build && pnpm preview --port ${port}`,
        url: `http://localhost:${port}/`,
        reuseExistingServer: !process.env["CI"],
        timeout: 180_000,
    },
    projects: engines.flatMap(({ name, device }) => [
        { name, use: { ...device } },
        { name: `${name}-no-js`, use: { ...device, javaScriptEnabled: false } },
    ]),
});
