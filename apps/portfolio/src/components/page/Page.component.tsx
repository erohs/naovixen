import type { FunctionComponent, PropsWithChildren } from 'react';

/** The page width and the space above and below a page's content, for every page but home. */
export const Page: FunctionComponent<PropsWithChildren> = ({ children }) => (
    <div className="nx-page">{children}</div>
);
