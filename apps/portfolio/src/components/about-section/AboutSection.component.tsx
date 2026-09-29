import type { FunctionComponent } from 'react';
import { Heart } from '@naovixen/brand';
import { Container, Grid } from '@naovixen/layout';

import { placeholderPhotoDescription } from '../../constants/PlaceholderPhotoDescription.const';
import { AboutSummary } from '../about-summary/AboutSummary.component';
import { PhotoPlaceholder } from '../photo-placeholder/PhotoPlaceholder.component';

export const AboutSection: FunctionComponent = () => (
    <Container as="section" aria-labelledby="about-title" className="nx-about-section">
        <Grid className="nx-about-section__columns">
            <AboutSummary />
            <div className="nx-about-section__photo">
                <PhotoPlaceholder description={placeholderPhotoDescription} />
                <Heart className="nx-about-section__heart" />
            </div>
        </Grid>
    </Container>
);
