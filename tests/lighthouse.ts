import { execSync } from "node:child_process";
import { appendFileSync } from "node:fs";

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

/** Fetched when run, not installed, as nothing else needs it. */
const lighthouse = "lighthouse@13.5.0";

const runLighthouseOnce = (url: string): Record<string, ICategory> => {
    const report = execSync(
        `pnpm --silent dlx ${lighthouse} ${url} --quiet --output=json --output-path=stdout ` +
            `--only-categories=${Object.keys(minimumScores).join(",")} --chrome-flags=--headless=new`,
        { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 },
    );
    return JSON.parse(report).categories;
};

/** Lighthouse sometimes fails to record a page load (NO_NAVSTART) and asks to be run again. */
const runLighthouse = (url: string, attemptsLeft = 3): Record<string, ICategory> => {
    try {
        return runLighthouseOnce(url);
    } catch (error) {
        if (attemptsLeft <= 1) throw error;
        console.log(`${url} failed to record; running it again`);
        return runLighthouse(url, attemptsLeft - 1);
    }
};

const median = (values: number[]): number =>
    values.toSorted((first, second) => first - second)[Math.floor(values.length / 2)] ?? 0;

interface IPageScores {
    path: string;
    scores: Record<string, number>;
}

const scorePage = (path: string): IPageScores => {
    const runs = Array.from({ length: runsPerPage }, () => runLighthouse(origin + path));
    const scores = Object.fromEntries(
        Object.keys(minimumScores).map((category) => [
            category,
            Math.round(median(runs.map((run) => run[category]?.score ?? 0)) * 100),
        ]),
    );
    console.log(path, scores);
    return { path, scores };
};

const minimumOf = (category: string): number => (minimumScores[category] ?? 1) * 100;

const scoreCell = (category: string, score: number): string => `${score < minimumOf(category) ? "❌" : "✅"} ${score}`;

/** A table for the GitHub Actions run's summary page. */
const summaryTable = (results: IPageScores[]): string => {
    const categories = Object.keys(minimumScores);
    const rows = results.map(
        ({ path, scores }) =>
            `| ${path} | ${categories.map((category) => scoreCell(category, scores[category] ?? 0)).join(" | ")} |`,
    );
    const budget = categories.map((category) => `${category} ${minimumOf(category)}`).join(", ");
    return [
        `## Lighthouse, mobile, median of ${runsPerPage} runs`,
        "",
        `Budget: ${budget}.`,
        "",
        `| Page | ${categories.join(" | ")} |`,
        `| --- |${" ---: |".repeat(categories.length)}`,
        ...rows,
        "",
    ].join("\n");
};

const results = pages.map(scorePage);
const summaryPath = process.env["GITHUB_STEP_SUMMARY"];
if (summaryPath) appendFileSync(summaryPath, summaryTable(results));

const failures = results.flatMap(({ path, scores }) =>
    Object.entries(scores)
        .filter(([category, score]) => score < minimumOf(category))
        .map(([category, score]) => `${path}: ${category} ${score}, below ${minimumOf(category)}`),
);
if (failures.length > 0) {
    console.error(failures.join("\n"));
    process.exitCode = 1;
}
