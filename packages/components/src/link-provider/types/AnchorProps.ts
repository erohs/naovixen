import type { ComponentPropsWithRef } from 'react';

/** What a link ends up rendering: an anchor's own props, with nothing of Link's left in them. */
export type AnchorProps = ComponentPropsWithRef<'a'>;
