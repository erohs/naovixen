import { SectionHeading } from '@naovixen/blocks';

import type { IShowcase } from '../../interfaces/IShowcase';

export const sectionHeadingShowcase: IShowcase = {
    name: 'SectionHeading',
    examples: [
        { name: 'Heading only', render: () => <SectionHeading>Featured projects</SectionHeading> },
        {
            name: 'With a number and intro',
            render: () => (
                <SectionHeading number="01" intro="What the problem was, and who had it.">
                    The problem
                </SectionHeading>
            ),
        },
    ],
};
