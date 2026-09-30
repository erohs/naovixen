import type { FunctionComponent } from 'react';
import {
    arrowRightIcon,
    ButtonVariant,
    Heading,
    Icon,
    Text,
    TextVariant,
} from '@naovixen/components';

import { Page } from '../../components/page/Page.component';
import { RouterLinkButton } from '../../components/router-link-button/RouterLinkButton.component';

export const NotFoundPage: FunctionComponent = () => (
    <Page>
        <div className="nx-not-found-page">
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
        </div>
    </Page>
);
