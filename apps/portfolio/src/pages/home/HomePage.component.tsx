import type { FunctionComponent } from "react";
import { AboutSection } from "./AboutSection.component";
import { ContactBanner } from "./ContactBanner.component";
import { ExperienceSection } from "./ExperienceSection.component";
import { FeaturedProjectsSection } from "./FeaturedProjectsSection.component";
import { HeroSection } from "./HeroSection.component";
import type { IHomePageProps } from "./interfaces/IHomePageProps";
import { LatestPostsSection } from "./LatestPostsSection.component";
import { SkillsSection } from "./SkillsSection.component";
import { TestimonialSection } from "./TestimonialSection.component";

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
