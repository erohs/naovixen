import { execFileSync } from "node:child_process";

/**
 * Runs mobile Lighthouse three times on each page and fails if any category's median falls
 * below its minimum. Expects the built site served as Cloudflare would: `pnpm exec wrangler dev`.
 */
const origin = process.env["LIGHTHOUSE_ORIGIN"] ?? "http://127.0.0.1:8787";
const runsPerPage = 3;

const pages = [
    "/",
    "/about/",
    "/blog/",
    "/blog/captions-from-scratch-streaming-webvtt-in-net/",
    "/work/captions-and-transcription/",
];

const minimumScores: Record<string, number> = {
    performance: 0.95,
    accessibility: 1,
    "best-practices": 1,
    seo: 1,
};

interface ICategory {
    score: number | null;
}

const runLighthouse = (url: string): Record<string, ICategory> => {
    const report = execFileSync(
        process.execPath,
        [
            "node_modules/lighthouse/cli/index.js",
            url,
            "--quiet",
            "--output=json",
            "--output-path=stdout",
            `--only-categories=${Object.keys(minimumScores).join(",")}`,
            "--chrome-flags=--headless=new",
        ],
        { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 },
    );
    return JSON.parse(report).categories;
};

const median = (values: number[]): number => values.toSorted((first, second) => first - second)[Math.floor(values.length / 2)] ?? 0;

const checkPage = (path: string): string[] => {
    const runs = Array.from({ length: runsPerPage }, () => runLighthouse(origin + path));
    return Object.entries(minimumScores).flatMap(([category, minimum]) => {
        const score = Math.round(median(runs.map((run) => run[category]?.score ?? 0)) * 100);
        console.log(`${path} ${category} ${score}`);
        return score < minimum * 100 ? [`${path}: ${category} ${score}, below ${minimum * 100}`] : [];
    });
};

const failures = pages.flatMap(checkPage);
if (failures.length > 0) {
    console.error(failures.join("\n"));
    process.exitCode = 1;
}
