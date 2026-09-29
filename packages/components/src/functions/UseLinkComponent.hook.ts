import { useContext } from 'react';

import { LinkComponentContext } from '../constants/LinkComponentContext.context';
import type { LinkComponent } from '../types/LinkComponent';

export function useLinkComponent(): LinkComponent {
  return useContext(LinkComponentContext);
}
