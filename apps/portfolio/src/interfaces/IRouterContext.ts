import type { IBlogRepository } from '@naovixen/cms';

/** Handed to every route's loader, so routes depend on interfaces rather than a CMS. */
export interface IRouterContext {
    readonly blogRepository: IBlogRepository;
}
