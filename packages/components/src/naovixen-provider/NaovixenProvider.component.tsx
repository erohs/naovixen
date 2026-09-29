import type { FunctionComponent } from 'react';

import { LinkComponentContext } from '../constants/LinkComponentContext.context';
import { ThemeControllerContext } from '../constants/ThemeControllerContext.context';
import type { INaovixenProviderProps } from './interfaces/INaovixenProviderProps';

export const NaovixenProvider: FunctionComponent<INaovixenProviderProps> = ({
  themeController,
  linkComponent = 'a',
  children,
}) => (
  <ThemeControllerContext value={themeController}>
    <LinkComponentContext value={linkComponent}>{children}</LinkComponentContext>
  </ThemeControllerContext>
);
