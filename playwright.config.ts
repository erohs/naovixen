import { defineConfig, devices } from "@playwright/test";

const engines = [
    { name: "chromium", device: devices["Desktop Chrome"] },
    { name: "firefox", device: devices["Desktop Firefox"] },
    { name: "webkit", device: devices["Desktop Safari"] },
];

export default defineConfig({
    testDir: "tests/e2e",
    fullyParallel: true,
    forbidOnly: Boolean(process.env["CI"]),
    use: { baseURL: "http://localhost:4321" },
    webServer: {
        command: "pnpm build && pnpm preview",
        url: "http://localhost:4321/",
        reuseExistingServer: !process.env["CI"],
        timeout: 180_000,
    },
    projects: engines.flatMap(({ name, device }) => [
        { name, use: { ...device } },
        { name: `${name}-no-js`, use: { ...device, javaScriptEnabled: false } },
    ]),
});
