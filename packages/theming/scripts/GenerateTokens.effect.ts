import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { renderTokenStylesheet } from '../src/functions/RenderTokenStylesheet.function';
import { darkTheme } from '../src/tokens/DarkTheme.tokens';
import { lightTheme } from '../src/tokens/LightTheme.tokens';
import { sharedTokens } from '../src/tokens/Shared.tokens';

const outputPath = resolve(dirname(fileURLToPath(import.meta.url)), '../src/generated/tokens.css');
const stylesheet = renderTokenStylesheet(sharedTokens, lightTheme, darkTheme);

/**
 * With `--check` it writes nothing and fails if the committed file is stale, so lint catches a
 * token edit that was never regenerated.
 */
if (!process.argv.includes('--check')) {
    writeFileSync(outputPath, stylesheet);
} else if (!existsSync(outputPath) || readFileSync(outputPath, 'utf8') !== stylesheet) {
    console.error('src/generated/tokens.css is out of date. Run `pnpm generate` in theming.');
    process.exitCode = 1;
}
