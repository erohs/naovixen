/** A singleton can be edited and published, but not duplicated or deleted. */
export const singletonActions: ReadonlySet<string> = new Set(["publish", "discardChanges", "restore"]);
