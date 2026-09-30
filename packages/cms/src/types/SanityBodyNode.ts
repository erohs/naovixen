import type { PostBySlugQueryResult } from '../generated/SanityTypes';

/** Posts and project sections share one body schema, so one generated shape serves both. */
export type SanityBodyNode = NonNullable<PostBySlugQueryResult>['body'][number];
