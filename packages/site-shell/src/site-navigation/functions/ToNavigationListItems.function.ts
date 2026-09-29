import type { INavigationListItem } from '@naovixen/blocks';
import type { INavigationItem } from '@naovixen/models';

export function toNavigationListItems(
    items: readonly INavigationItem[],
): readonly INavigationListItem[] {
    return items.map((item) => ({ label: item.label, href: item.path }));
}
