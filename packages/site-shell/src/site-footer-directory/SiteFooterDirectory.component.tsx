import type { FunctionComponent } from 'react';
import { NavigationList } from '@naovixen/blocks';
import { Wordmark } from '@naovixen/brand';
import { Text, TextVariant } from '@naovixen/components';
import { Grid, Stack } from '@naovixen/layout';

import { SiteFooterColumn } from '../site-footer-column/SiteFooterColumn.component';
import { toNavigationListItems } from '../site-navigation/functions/ToNavigationListItems.function';
import { SocialLinkList } from '../social-link-list/SocialLinkList.component';
import type { ISiteFooterDirectoryProps } from './interfaces/ISiteFooterDirectoryProps';

export const SiteFooterDirectory: FunctionComponent<ISiteFooterDirectoryProps> = (props) => (
    <Grid>
        <Stack>
            <Wordmark />
            <Text variant={TextVariant.Small}>{props.blurb}</Text>
        </Stack>
        <SiteFooterColumn heading="site">
            <NavigationList
                items={toNavigationListItems(props.navigationItems)}
                currentHref={props.currentPath}
                linkComponent={props.linkComponent}
            />
        </SiteFooterColumn>
        <SiteFooterColumn heading="elsewhere">
            <SocialLinkList links={props.socialLinks} />
        </SiteFooterColumn>
    </Grid>
);
