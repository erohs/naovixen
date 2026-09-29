/**
 * Whether a navigation item belongs to the page being shown. The home page matches only
 * itself; any other section also matches the pages beneath it, so a case study keeps
 * "Work" current.
 */
export function isCurrentPath(currentPath: string, itemPath: string): boolean {
  if (itemPath === '/') {
    return currentPath === '/';
  }

  return currentPath === itemPath || currentPath.startsWith(`${itemPath}/`);
}
