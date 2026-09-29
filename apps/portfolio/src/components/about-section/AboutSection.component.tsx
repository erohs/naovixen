import type { FunctionComponent } from 'react';
import { Figure, FigureShape } from '@naovixen/blocks';
import { Heart } from '@naovixen/brand';
import { arrowRightIcon, Heading, Text, TextVariant } from '@naovixen/components';
import { Container, Grid, Space, Stack } from '@naovixen/layout';

import { placeholderHomePage } from '../../constants/PlaceholderHomePage.const';
import { placeholderInterests } from '../../constants/PlaceholderInterests.const';
import { placeholderPhoto } from '../../constants/PlaceholderPhoto.const';
import { InterestList } from '../interest-list/InterestList.component';
import { RouterLinkIcon } from '../router-link-icon/RouterLinkIcon.component';

export const AboutSection: FunctionComponent = () => (
    <Container as="section" aria-labelledby="about-title" className="nx-about-section">
        <Grid gap={Space.BetweenSections} className="nx-about-section__columns">
            <Stack className="nx-about-section__text">
                <Heading level={2} id="about-title">
                    About me
                </Heading>
                <Text variant={TextVariant.Lead}>{placeholderHomePage.aboutLead}</Text>
                <Text className="nx-about-section__body">{placeholderHomePage.aboutBody}</Text>
                <Heading level={3}>Away from the keyboard</Heading>
                <InterestList interests={placeholderInterests} />
                <p>
                    <RouterLinkIcon to="/about" icon={arrowRightIcon}>
                        More about me
                    </RouterLinkIcon>
                </p>
            </Stack>
            <div className="nx-about-section__photo">
                <Figure image={placeholderPhoto} shape={FigureShape.Portrait} />
                <Heart className="nx-about-section__heart" />
            </div>
        </Grid>
    </Container>
);
