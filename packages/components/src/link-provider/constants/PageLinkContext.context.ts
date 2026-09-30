import { createContext } from 'react';

import type { RenderPageLink } from '../types/RenderPageLink';
import { renderAnchor } from '../functions/RenderAnchor.function';

/** How `Link` renders a page on this site: a plain anchor until an app provides a router's. */
export const PageLinkContext = createContext<RenderPageLink>(renderAnchor);
