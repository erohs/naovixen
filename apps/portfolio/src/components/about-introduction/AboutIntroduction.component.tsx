import type { FunctionComponent } from 'react';
import { Figure, FigureShape } from '@naovixen/blocks';
import { Text, TextVariant } from '@naovixen/components';
import { Grid, Space, Stack } from '@naovixen/layout';

import { placeholderAboutPage } from '../../constants/PlaceholderAboutPage.const';
import { placeholderPhoto } from '../../constants/PlaceholderPhoto.const';
import { GreetingHeading } from '../greeting-heading/GreetingHeading.component';

export const AboutIntroduction: FunctionComponent = () => (
    <Grid gap={Space.BetweenSections} className="nx-about-introduction">
        <Stack className="nx-about-introduction__text">
            <GreetingHeading greeting={placeholderAboutPage.greeting}>About me</GreetingHeading>
            <Text variant={TextVariant.Lead}>{placeholderAboutPage.lead}</Text>
            {placeholderAboutPage.paragraphs.map((paragraph) => (
                <Text key={paragraph}>{paragraph}</Text>
            ))}
        </Stack>
        <Figure
            image={{ ...placeholderPhoto, loading: 'eager' }}
            shape={FigureShape.Portrait}
            className="nx-about-introduction__photo"
        />
    </Grid>
);
