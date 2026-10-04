import { readFile } from "node:fs/promises";
import { getCliClient } from "sanity/cli";
import { defaultFixturePath } from "./constants/DefaultFixturePath.const";
import { seedApiVersion } from "./constants/SeedApiVersion.const";
import { buildSeedDocuments } from "./functions/BuildSeedDocuments.function";
import type { ISeedContent } from "./interfaces/ISeedContent";

/**
 * Writes the fixture's posts, projects, tags and privacy notice to the Studio's dataset, replacing
 * the documents it wrote before and leaving every other document alone. Run `pnpm seed`, or
 * `pnpm seed --dry-run` to list what it would write. It signs in as you, through `sanity login`.
 */
const seed = async (): Promise<void> => {
    const fixturePath = process.argv.find((argument) => argument.endsWith(".json")) ?? defaultFixturePath;
    const content = JSON.parse(await readFile(fixturePath, "utf8")) as ISeedContent;
    const documents = buildSeedDocuments(content);

    if (process.argv.includes("--dry-run")) {
        documents.forEach((document) => {
            process.stdout.write(`${document._type}\t${document._id}\n`);
        });

        return;
    }

    const client = getCliClient({ apiVersion: seedApiVersion });
    const transaction = documents.reduce(
        (pending, document) => pending.createOrReplace(document),
        client.transaction(),
    );
    await transaction.commit();
    process.stdout.write(
        `Seeded ${String(documents.length)} documents into ${client.config().dataset ?? "the dataset"}.\n`,
    );
};

void seed();
