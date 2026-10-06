import { appendFileSync, readFileSync } from "node:fs";

/**
 * Turns Playwright's merged JSON report (the path given, or `results.json`) into a table on the
 * GitHub Actions run's summary page, or prints it when run elsewhere.
 */
interface ITestResult {
    projectName: string;
    status: "expected" | "unexpected" | "flaky" | "skipped";
}

interface ISpec {
    title: string;
    file: string;
    tests: ITestResult[];
}

interface ISuite {
    specs?: ISpec[];
    suites?: ISuite[];
}

const columns = [
    { status: "expected", heading: "✅ passed" },
    { status: "unexpected", heading: "❌ failed" },
    { status: "flaky", heading: "⚠️ flaky" },
    { status: "skipped", heading: "⏭️ skipped" },
] as const;

const specsIn = (suite: ISuite): ISpec[] => [...(suite.specs ?? []), ...(suite.suites ?? []).flatMap(specsIn)];

const report = JSON.parse(readFileSync(process.argv[2] ?? "results.json", "utf8")) as { suites: ISuite[] };
const results = report.suites
    .flatMap(specsIn)
    .flatMap((spec) => spec.tests.map((result) => ({ ...result, title: `${spec.file} › ${spec.title}` })));
const projects = [...new Set(results.map((result) => result.projectName))].toSorted();

const countRow = (project: string): string => {
    const counts = columns.map(
        ({ status }) => results.filter((result) => result.projectName === project && result.status === status).length,
    );
    return `| ${project} | ${counts.join(" | ")} |`;
};

const failed = results
    .filter((result) => result.status === "unexpected")
    .map((result) => `- ❌ **${result.projectName}**: ${result.title}`);

const summary = [
    "## End-to-end",
    "",
    `| Project | ${columns.map(({ heading }) => heading).join(" | ")} |`,
    `| --- |${" ---: |".repeat(columns.length)}`,
    ...projects.map(countRow),
    "",
    ...(failed.length > 0 ? ["### Failed", "", ...failed, ""] : []),
    "Screenshots and step-by-step traces are in the `playwright-report` artifact below.",
    "",
].join("\n");

const summaryPath = process.env["GITHUB_STEP_SUMMARY"];
if (summaryPath) appendFileSync(summaryPath, summary);
else console.log(summary);
