import type { FunctionComponent } from 'react';
import {
    arrowRightIcon,
    ButtonVariant,
    Heading,
    Icon,
    Text,
    TextVariant,
} from '@naovixen/components';
import { Space, Stack } from '@naovixen/layout';

import { Page } from '../page/Page.component';
import { RouterLinkButton } from '../router-link-button/RouterLinkButton.component';

export const NotFoundPage: FunctionComponent = () => (
    <Page>
        <Stack gap={Space.BetweenGroups} className="nx-not-found-page">
            <Heading level={1}>Page not found</Heading>
            <Text variant={TextVariant.Lead}>
                There is nothing at this address. The page may have moved, or the link may have a
                typo in it.
            </Text>
            <div>
                <RouterLinkButton to="/" variant={ButtonVariant.Primary}>
                    Go to the home page
                    <Icon source={arrowRightIcon} />
                </RouterLinkButton>
            </div>
        </Stack>
    </Page>
);
