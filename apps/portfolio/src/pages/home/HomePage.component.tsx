import type { FunctionComponent } from "react";
import { AboutSection } from "./sections/about/AboutSection.component";
import { ContactBanner } from "./sections/contact-banner/ContactBanner.component";
import { ExperienceSection } from "./sections/experience/ExperienceSection.component";
import { FeaturedProjectsSection } from "./sections/featured-projects/FeaturedProjectsSection.component";
import { HeroSection } from "./sections/hero/HeroSection.component";
import type { IHomePageProps } from "./interfaces/IHomePageProps";
import { LatestPostsSection } from "./sections/latest-posts/LatestPostsSection.component";
import { SkillsSection } from "./sections/skills/SkillsSection.component";
import { TestimonialSection } from "./sections/testimonial/TestimonialSection.component";

export const HomePage: FunctionComponent<IHomePageProps> = ({ featuredProjects, latestPosts }) => (
    <>
        <HeroSection hasFeaturedProjects={featuredProjects.length > 0} />
        <FeaturedProjectsSection featuredProjects={featuredProjects} />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <TestimonialSection />
        <LatestPostsSection latestPosts={latestPosts} />
        <ContactBanner />
    </>
);
