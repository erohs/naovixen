import type { FunctionComponent } from 'react';
import { Heading, Text, TextVariant } from '@naovixen/components';

import type { IPageHeaderProps } from './interfaces/IPageHeaderProps';

export const PageHeader: FunctionComponent<IPageHeaderProps> = ({ heading, intro }) => (
    <header className="nx-page-header">
        <Heading level={1}>{heading}</Heading>
        <Text variant={TextVariant.Lead} className="nx-page-header__intro">
            {intro}
        </Text>
    </header>
);
