import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';
import type { IContainerProps } from '@naovixen/layout';
import { Container } from '@naovixen/layout';

/** The page width and the space above and below a page's content, for every page but home. */
export const Page: FunctionComponent<IContainerProps> = ({ className, ...containerProps }) => (
    <Container {...containerProps} className={joinClassNames('nx-page', className)} />
);
