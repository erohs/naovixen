import type { FunctionComponent } from 'react';
import { useId } from 'react';
import { Heading } from '@naovixen/components';

import type { IExampleProps } from './interfaces/IExampleProps';

export const Example: FunctionComponent<IExampleProps> = ({ name, children }) => {
    const headingId = useId();

    return (
        <section aria-labelledby={headingId} className="nv-example">
            <Heading level={3} id={headingId} className="nv-example__name">
                {name}
            </Heading>
            <div className="nv-example__stage">{children}</div>
        </section>
    );
};
