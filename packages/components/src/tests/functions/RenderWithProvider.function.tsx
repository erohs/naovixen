import type { ReactElement } from 'react';
import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';

import { NaovixenProvider } from '../../naovixen-provider/NaovixenProvider.component';
import type { IRenderOptions } from '../interfaces/IRenderOptions';
import { createThemeControllerForTests } from './CreateThemeControllerForTests.function';

export function renderWithProvider(ui: ReactElement, options: IRenderOptions = {}): RenderResult {
  const themeController = options.themeController ?? createThemeControllerForTests();

  return render(
    <NaovixenProvider
      themeController={themeController}
      linkComponent={options.linkComponent ?? 'a'}
    >
      {ui}
    </NaovixenProvider>,
  );
}
