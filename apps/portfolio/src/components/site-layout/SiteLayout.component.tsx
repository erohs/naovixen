import type { FunctionComponent } from 'react';
import { useState } from 'react';
import { ThemeProvider } from '@naovixen/components';

import { createThemeController } from '../../functions/CreateThemeController.function';
import type { ISiteFrameProps } from '../site-frame/interfaces/ISiteFrameProps';
import { SiteFrame } from '../site-frame/SiteFrame.component';

export const SiteLayout: FunctionComponent<ISiteFrameProps> = (frameProps) => {
    const [themeController] = useState(createThemeController);

    return (
        <ThemeProvider themeController={themeController}>
            <SiteFrame {...frameProps} />
        </ThemeProvider>
    );
};
