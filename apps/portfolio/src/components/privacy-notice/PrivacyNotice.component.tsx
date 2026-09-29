import type { FunctionComponent } from 'react';
import { Heading, HeadingSize, Link, Text, TextVariant } from '@naovixen/components';
import { formatDate } from '@naovixen/formatting';

import { placeholderEmailAddress } from '../../constants/PlaceholderEmailAddress.const';
import { placeholderPrivacyPage as copy } from '../../constants/PlaceholderPrivacyPage.const';

/** The notice's text, below its heading. */
export const PrivacyNotice: FunctionComponent = () => (
    <>
        <Text variant={TextVariant.Meta}>
            Last updated <time dateTime={copy.lastUpdated}>{formatDate(copy.lastUpdated)}</time>
        </Text>
        <Text variant={TextVariant.Lead}>{copy.intro}</Text>
        <Heading level={2} size={HeadingSize.H3}>
            Cookies and analytics
        </Heading>
        <Text>{copy.cookies}</Text>
        <Heading level={2} size={HeadingSize.H3}>
            Your rights
        </Heading>
        <Text>
            {copy.rightsBeforeEmail}{' '}
            <Link href={`mailto:${placeholderEmailAddress}`}>{placeholderEmailAddress}</Link>{' '}
            {copy.rightsAfterEmail}
        </Text>
    </>
);
