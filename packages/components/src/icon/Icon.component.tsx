import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import type { IIconProps } from './interfaces/IIconProps';

/**
 * Always decorative: the text beside an icon carries its meaning. The source is inserted as
 * markup, so it must come from this package's icon files, never from user input.
 */
export const Icon: FunctionComponent<IIconProps> = ({ source, className, ...spanProps }) => (
    <span
        {...spanProps}
        className={joinClassNames('nv-icon', className)}
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: source }}
    />
);
