import { createContext } from 'react';

import type { LinkComponent } from '../types/LinkComponent';

export const LinkComponentContext = createContext<LinkComponent>('a');
