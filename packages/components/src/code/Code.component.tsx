import type { ComponentPropsWithRef, FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

/** Code inside a sentence. For a block of code, see CodeBlock. */
export const Code: FunctionComponent<ComponentPropsWithRef<'code'>> = ({
    className,
    ...codeProps
}) => <code {...codeProps} className={joinClassNames('nx-code', className)} />;
