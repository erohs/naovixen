import type { FunctionComponent } from 'react';
import { arrowRightIcon, Heading, Text, TextVariant } from '@naovixen/components';
import { Stack } from '@naovixen/layout';

import { placeholderHomePage } from '../../constants/PlaceholderHomePage.const';
import { placeholderInterests } from '../../constants/PlaceholderInterests.const';
import { InterestList } from '../interest-list/InterestList.component';
import { RouterLinkIcon } from '../router-link-icon/RouterLinkIcon.component';

/** The home page's short introduction, with a link to the full about page. */
export const AboutSummary: FunctionComponent = () => (
    <Stack className="nx-about-summary">
        <Heading level={2} id="about-title" className="nx-about-summary__heading">
            About me
        </Heading>
        <Text variant={TextVariant.Lead}>{placeholderHomePage.aboutLead}</Text>
        <Text className="nx-about-summary__body">{placeholderHomePage.aboutBody}</Text>
        <Heading level={3} className="nx-about-summary__subheading">
            Away from the keyboard
        </Heading>
        <InterestList interests={placeholderInterests} />
        <p className="nx-about-summary__more">
            <RouterLinkIcon to="/about" icon={arrowRightIcon}>
                More about me
            </RouterLinkIcon>
        </p>
    </Stack>
);
