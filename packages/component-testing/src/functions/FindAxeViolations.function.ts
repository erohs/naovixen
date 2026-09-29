import axe from 'axe-core';

const wcagTags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22a', 'wcag22aa'];

/**
 * Rule ids, so a failure reads `+ "button-name"`. Runs on the body because jsdom's blank
 * document has no title or lang. Contrast needs real layout, so the browser checks it.
 */
export async function findAxeViolations(): Promise<string[]> {
  const results = await axe.run(document.body, {
    runOnly: { type: 'tag', values: wcagTags },
    rules: { 'color-contrast': { enabled: false } },
  });

  return results.violations.map((violation) => violation.id);
}
