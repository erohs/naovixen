import type { FunctionComponent } from 'react';
import { SectionHeading } from '@naovixen/blocks';
import { Grid, Space, Stack } from '@naovixen/layout';

import { placeholderAboutPage } from '../../constants/PlaceholderAboutPage.const';
import { placeholderInterests } from '../../constants/PlaceholderInterests.const';
import { InterestList } from '../interest-list/InterestList.component';
import { PrincipleList } from '../principle-list/PrincipleList.component';

export const AboutDetails: FunctionComponent = () => (
    <Grid className="nx-about-details">
        <Stack as="section" gap={Space.BetweenGroups} aria-labelledby="how-i-work-title">
            <SectionHeading headingId="how-i-work-title">How I work</SectionHeading>
            <PrincipleList principles={placeholderAboutPage.principles} />
        </Stack>
        <Stack as="section" gap={Space.BetweenGroups} aria-labelledby="interests-title">
            <SectionHeading headingId="interests-title">Away from the keyboard</SectionHeading>
            <InterestList interests={placeholderInterests} />
        </Stack>
    </Grid>
);
