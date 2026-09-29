import type { FunctionComponent } from 'react';

import { AboutSection } from '../about-section/AboutSection.component';
import { ContactBanner } from '../contact-banner/ContactBanner.component';
import { ExperienceSection } from '../experience-section/ExperienceSection.component';
import { HeroSection } from '../hero-section/HeroSection.component';
import { LatestPostsSection } from '../latest-posts-section/LatestPostsSection.component';
import { SkillsSection } from '../skills-section/SkillsSection.component';
import { TestimonialSection } from '../testimonial-section/TestimonialSection.component';
import type { IHomePageProps } from './interfaces/IHomePageProps';

/** Featured projects join between the hero and about sections in Phase 7. */
export const HomePage: FunctionComponent<IHomePageProps> = ({ latestPosts }) => (
    <>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <TestimonialSection />
        <LatestPostsSection posts={latestPosts} />
        <ContactBanner />
    </>
);
