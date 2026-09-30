import type { FunctionComponent } from 'react';
import { Heading } from '@naovixen/components';

import type { IPageSectionProps } from './interfaces/IPageSectionProps';

export const PageSection: FunctionComponent<IPageSectionProps> = ({ id, title, children }) => (
    <section id={id} aria-labelledby={`${id}-title`} className="nx-page-section">
        <Heading level={2} id={`${id}-title`}>
            {title}
        </Heading>
        {children}
    </section>
);
