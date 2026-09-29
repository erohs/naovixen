import type { ReactNode } from 'react';
import { Card, TagList } from '@naovixen/blocks';
import { arrowRightIcon, Heading, LinkIcon, Text } from '@naovixen/components';

import type { IShowcase } from '../../interfaces/IShowcase';

const renderContent = (): ReactNode => (
    <>
        <Heading level={3}>Example project</Heading>
        <Text>A short summary of what the project is and why it exists.</Text>
        <TagList label="Tech stack" tags={['TypeScript', 'React']} />
        <LinkIcon href="#example" icon={arrowRightIcon}>
            Read more
        </LinkIcon>
    </>
);

export const cardShowcase: IShowcase = {
    name: 'Card',
    examples: [{ name: 'Folds its corner on hover', render: () => <Card>{renderContent()}</Card> }],
};
