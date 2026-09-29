import type { FunctionComponent } from 'react';
import { Figure, FigureShape } from '@naovixen/blocks';
import { Heart } from '@naovixen/brand';
import { Container, Grid } from '@naovixen/layout';

import { placeholderPhoto } from '../../constants/PlaceholderPhoto.const';
import { AboutSummary } from '../about-summary/AboutSummary.component';

export const AboutSection: FunctionComponent = () => (
    <Container as="section" aria-labelledby="about-title" className="nx-about-section">
        <Grid className="nx-about-section__columns">
            <AboutSummary />
            <div className="nx-about-section__photo">
                <Figure image={placeholderPhoto} shape={FigureShape.Portrait} />
                <Heart className="nx-about-section__heart" />
            </div>
        </Grid>
    </Container>
);
