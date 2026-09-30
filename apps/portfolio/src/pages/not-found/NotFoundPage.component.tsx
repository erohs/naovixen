import type { FunctionComponent } from 'react';
import {
    arrowRightIcon,
    ButtonGroup,
    ButtonVariant,
    Heading,
    Icon,
    LinkButton,
    Text,
    TextVariant,
} from '@naovixen/components';

import { Page } from '../../components/page/Page.component';

export const NotFoundPage: FunctionComponent = () => (
    <Page>
        <div className="nv-not-found-page">
            <Heading level={1}>Page not found</Heading>
            <Text variant={TextVariant.Lead}>
                There is nothing at this address. The page may have moved, or the link may have a
                typo in it.
            </Text>
            <ButtonGroup>
                <LinkButton href="/" variant={ButtonVariant.Primary}>
                    Go to the home page
                    <Icon source={arrowRightIcon} />
                </LinkButton>
            </ButtonGroup>
        </div>
    </Page>
);
