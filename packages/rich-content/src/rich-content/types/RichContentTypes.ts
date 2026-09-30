import type { PortableTextTypeComponent } from '@portabletext/react';
import type { ContentBlock } from '@naovixen/cms';

/** A renderer for every one of the site's blocks: a block the CMS adds fails to compile here until it has one. */
export type RichContentTypes = {
    readonly [TType in ContentBlock['_type']]: PortableTextTypeComponent<
        Extract<ContentBlock, { _type: TType }>
    >;
};
