import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import { TextVariant } from './enums/TextVariant';
import type { ITextProps } from './interfaces/ITextProps';

export const Text: FunctionComponent<ITextProps> = ({
    variant = TextVariant.Body,
    className,
    ...paragraphProps
}) => (
    <p
        {...paragraphProps}
        className={joinClassNames('nv-text', `nv-text--${variant}`, className)}
    />
);
