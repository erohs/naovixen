import type { IColorTheme } from '../interfaces/IColorTheme';

function renderBlock(selector: string, tokens: object, colorScheme?: string): string {
    const tokenLines = Object.entries(tokens).map(
        ([name, value]) => `    ${name}: ${String(value)};`,
    );
    const schemeLines = colorScheme === undefined ? [] : [`    color-scheme: ${colorScheme};`, ''];

    return [`${selector} {`, ...schemeLines, ...tokenLines, '}'].join('\n');
}

function indent(block: string): string {
    return block
        .split('\n')
        .map((line) => (line === '' ? line : `    ${line}`))
        .join('\n');
}

/**
 * Light is the default; dark applies wherever `data-theme='dark'` is set. Before a script sets
 * `data-theme`, or without JavaScript at all, the reader's system setting decides.
 */
export function renderTokenStylesheet(
    sharedTokens: object,
    lightTheme: IColorTheme,
    darkTheme: IColorTheme,
): string {
    const systemDarkBlock = indent(renderBlock(':root:not([data-theme])', darkTheme, 'dark'));
    const blocks = [
        '/* Generated from src/tokens by scripts/GenerateTokens.effect.ts. Do not edit by hand. */',
        renderBlock(':root', sharedTokens),
        renderBlock(":root,\n[data-theme='light']", lightTheme, 'light'),
        renderBlock("[data-theme='dark']", darkTheme, 'dark'),
        `@media (prefers-color-scheme: dark) {\n${systemDarkBlock}\n}`,
    ];

    return `${blocks.join('\n\n')}\n`;
}
