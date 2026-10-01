import type { FunctionComponent, ReactNode } from 'react';
import { useId } from 'react';
import {
    arrowDownIcon,
    arrowRightIcon,
    ButtonVariant,
    downloadIcon,
    ExclamationBubble,
    graduationCapIcon,
    Heading,
    HeadingSize,
    heartIcon,
    Icon,
    Link,
    LinkButton,
    LinkVariant,
    mailIcon,
    pawIcon,
    SectionHeading,
    Text,
    TextVariant,
    VisuallyHidden,
} from '@naovixen/components';

import { InterestList } from '../../components/interest-list/InterestList.component';
import { PhotoPlaceholder } from '../../components/photo-placeholder/PhotoPlaceholder.component';
import { PostCard } from '../../components/post-card/PostCard.component';
import { ProjectCard } from '../../components/project-card/ProjectCard.component';
import { placeholderBlogIntro } from '../../constants/PlaceholderBlogIntro.const';
import { placeholderCvPath } from '../../constants/PlaceholderCvPath.const';
import { placeholderEmailAddress } from '../../constants/PlaceholderEmailAddress.const';
import { placeholderInterests } from '../../constants/PlaceholderInterests.const';
import { placeholderPhotoDescription } from '../../constants/PlaceholderPhotoDescription.const';
import { education } from './constants/Education.const';
import { employer } from './constants/Employer.const';
import { placeholderHomePage } from './constants/PlaceholderHomePage.const';
import { placeholderSkillGroups } from './constants/PlaceholderSkillGroups.const';
import { placeholderTestimonial } from './constants/PlaceholderTestimonial.const';
import type { IHomePageProps } from './interfaces/IHomePageProps';
import type { IRole } from './interfaces/IRole';
import type { ISkillGroup } from './interfaces/ISkillGroup';

interface IHomeSectionProps {
    readonly id?: string;
    readonly heading: string;
    /** Goes on the heading, and names the section landmark. */
    readonly headingId: string;
    readonly intro: string;
    /** A link beside the heading, such as "All posts". */
    readonly action?: ReactNode;
    readonly children: ReactNode;
}

/** One of the page's sections: a heading, an optional link beside it, then the content. */
const HomeSection: FunctionComponent<IHomeSectionProps> = (props) => (
    <section id={props.id} aria-labelledby={props.headingId} className="nv-home-section">
        <div className="nv-home-section__header">
            <SectionHeading headingId={props.headingId} intro={props.intro}>
                {props.heading}
            </SectionHeading>
            {props.action}
        </div>
        {props.children}
    </section>
);

/** "See my work" points at the projects, or at the experience while none are featured. */
const HeroActions: FunctionComponent<{ readonly hasFeaturedProjects: boolean }> = ({
    hasFeaturedProjects,
}) => (
    <div className="nv-hero-section__actions">
        <LinkButton
            href={hasFeaturedProjects ? '#work' : '#experience'}
            variant={ButtonVariant.Primary}
        >
            See my work <LinkButton.Icon source={arrowDownIcon} />
        </LinkButton>
        <LinkButton href={placeholderCvPath} download>
            Download CV <span className="nv-hero-section__file-type">PDF</span>
            <LinkButton.Icon source={downloadIcon} />
        </LinkButton>
    </div>
);

const HeroSection: FunctionComponent<{ readonly hasFeaturedProjects: boolean }> = ({
    hasFeaturedProjects,
}) => (
    <section aria-labelledby="hero-title" className="nv-hero-section">
        <ExclamationBubble>{placeholderHomePage.greeting}</ExclamationBubble>
        <Heading level={1} size={HeadingSize.Display} id="hero-title">
            Naomi{' '}
            <span className="nv-hero-section__surname">
                <span className="nv-hero-section__highlight">Shore</span>
                <Icon source={pawIcon} className="nv-hero-section__paw" />
            </span>
        </Heading>
        <Text variant={TextVariant.Lead} className="nv-hero-section__summary">
            {placeholderHomePage.summary}
        </Text>
        <HeroActions hasFeaturedProjects={hasFeaturedProjects} />
    </section>
);

/** Left out while no project is featured, rather than showing an empty section. */
const FeaturedProjectsSection: FunctionComponent<Pick<IHomePageProps, 'featuredProjects'>> = ({
    featuredProjects,
}) =>
    featuredProjects.length > 0 && (
        <HomeSection
            id="work"
            heading="Featured projects"
            headingId="work-title"
            intro={placeholderHomePage.featuredProjectsIntro}
            action={
                <Link href="/work" variant={LinkVariant.Standalone}>
                    All projects <Link.Icon source={arrowRightIcon} />
                </Link>
            }
        >
            <ul className="nv-home-section__cards">
                {featuredProjects.map((project) => (
                    <li key={project.slug}>
                        <ProjectCard project={project} headingLevel={3} />
                    </li>
                ))}
            </ul>
        </HomeSection>
    );

/** A short introduction, with a link to the full about page. */
const AboutSummary: FunctionComponent = () => (
    <div className="nv-about-summary">
        <Heading level={2} id="about-title" className="nv-about-summary__heading">
            About me
        </Heading>
        <Text variant={TextVariant.Lead}>{placeholderHomePage.aboutLead}</Text>
        <Text className="nv-about-summary__body">{placeholderHomePage.aboutBody}</Text>
        <Heading level={3} className="nv-about-summary__subheading">
            Away from the keyboard
        </Heading>
        <InterestList interests={placeholderInterests} />
        <p className="nv-about-summary__more">
            <Link href="/about" variant={LinkVariant.Standalone}>
                More about me <Link.Icon source={arrowRightIcon} />
            </Link>
        </p>
    </div>
);

const AboutSection: FunctionComponent = () => (
    <section aria-labelledby="about-title" className="nv-about-section">
        <div className="nv-about-section__columns">
            <AboutSummary />
            <div className="nv-about-section__photo">
                <PhotoPlaceholder description={placeholderPhotoDescription} />
                <Icon source={heartIcon} className="nv-about-section__heart" />
            </div>
        </div>
    </section>
);

/** A step on the employer's timeline. The dot and the line to the next step are drawn by the stylesheet. */
const EmployerRole: FunctionComponent<{ readonly role: IRole }> = ({ role }) => (
    <li className="nv-employer-role">
        <div className="nv-employer-role__header">
            <Heading level={4} className="nv-employer-role__title">
                {role.title}
            </Heading>
            <Text variant={TextVariant.Meta}>{role.dates}</Text>
        </div>
        <Text className="nv-employer-role__summary">{role.summary}</Text>
    </li>
);

const EmployerHistory: FunctionComponent = () => (
    <div className="nv-employer-history">
        <div className="nv-employer-history__header">
            <div className="nv-employer-history__name">
                <Heading level={3} size={HeadingSize.H4}>
                    {employer.name}
                    <span className="nv-employer-history__place">, {employer.place}</span>
                </Heading>
                <Text variant={TextVariant.Small}>{employer.description}</Text>
            </div>
            <Text variant={TextVariant.Meta}>{employer.dates}</Text>
        </div>
        <ol className="nv-employer-history__roles">
            {employer.roles.map((role) => (
                <EmployerRole key={role.title} role={role} />
            ))}
        </ol>
    </div>
);

const EducationSummary: FunctionComponent = () => (
    <div className="nv-education-summary">
        <Icon source={graduationCapIcon} className="nv-education-summary__icon" />
        <div className="nv-education-summary__header">
            <Heading level={3} className="nv-education-summary__degree">
                {education.degree}
            </Heading>
            <Text variant={TextVariant.Meta}>{education.dates}</Text>
        </div>
        <Text>
            {education.institution} · <strong>{education.grade}</strong>
        </Text>
        <Text className="nv-education-summary__note">{education.note}</Text>
    </div>
);

const ExperienceSection: FunctionComponent = () => (
    <HomeSection
        id="experience"
        heading="Experience"
        headingId="experience-title"
        intro={placeholderHomePage.experienceIntro}
        action={
            <Link href={placeholderCvPath} download variant={LinkVariant.Standalone}>
                Full CV<VisuallyHidden> (PDF)</VisuallyHidden> <Link.Icon source={arrowRightIcon} />
            </Link>
        }
    >
        <div className="nv-experience-section">
            <EmployerHistory />
            <EducationSummary />
        </div>
    </HomeSection>
);

/** The logo repeats the name written beneath it, so the icon stays hidden from screen readers. */
const SkillGroup: FunctionComponent<{ readonly group: ISkillGroup }> = ({ group }) => {
    const headingId = useId();

    return (
        <section aria-labelledby={headingId} className="nv-skill-group">
            <Heading level={3} id={headingId} className="nv-skill-group__label">
                {group.label}
            </Heading>
            <ul className="nv-skill-group__skills">
                {group.skills.map((skill) => (
                    <li key={skill.name} className="nv-skill-tile">
                        <span className="nv-skill-tile__logo">
                            <Icon source={skill.logo} />
                        </span>
                        <span>{skill.name}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

const SkillsSection: FunctionComponent = () => (
    <HomeSection heading="Skills" headingId="skills-title" intro={placeholderHomePage.skillsIntro}>
        <div className="nv-skills-section__groups">
            {placeholderSkillGroups.map((group) => (
                <SkillGroup key={group.label} group={group} />
            ))}
        </div>
    </HomeSection>
);

/** Who said it. The striped circle stands in for their photo until there is one. */
const TestimonialAttribution: FunctionComponent = () => (
    <figcaption className="nv-testimonial-attribution">
        <span
            role="img"
            aria-label={`Photo placeholder: ${placeholderTestimonial.name}`}
            className="nv-testimonial-attribution__photo"
        />
        <span className="nv-testimonial-attribution__text">
            <span className="nv-testimonial-attribution__name">{placeholderTestimonial.name}</span>
            <span className="nv-testimonial-attribution__role">{placeholderTestimonial.role}</span>
        </span>
    </figcaption>
);

/** The heading only names the landmark; the quote speaks for itself on screen. */
const TestimonialSection: FunctionComponent = () => (
    <section aria-labelledby="testimonial-title" className="nv-testimonial-section">
        <Heading level={2} id="testimonial-title" className="nv-visually-hidden">
            Testimonial
        </Heading>
        <figure className="nv-testimonial-section__figure">
            <blockquote className="nv-testimonial-section__quote">
                <p>{placeholderTestimonial.quote}</p>
            </blockquote>
            <TestimonialAttribution />
        </figure>
    </section>
);

const LatestPostsSection: FunctionComponent<Pick<IHomePageProps, 'latestPosts'>> = ({
    latestPosts,
}) => (
    <HomeSection
        heading="From the blog"
        headingId="blog-title"
        intro={placeholderBlogIntro}
        action={
            <Link href="/blog" variant={LinkVariant.Standalone}>
                All posts <Link.Icon source={arrowRightIcon} />
            </Link>
        }
    >
        <ul className="nv-home-section__cards">
            {latestPosts.map((post) => (
                <li key={post.slug}>
                    <PostCard post={post} headingLevel={3} />
                </li>
            ))}
        </ul>
    </HomeSection>
);

const ContactBanner: FunctionComponent = () => (
    <section aria-labelledby="contact-title" className="nv-contact-banner">
        <div className="nv-contact-banner__panel">
            <div className="nv-contact-banner__text">
                <Heading level={2} size={HeadingSize.H3} id="contact-title">
                    {placeholderHomePage.contactHeading}
                </Heading>
                <Text>{placeholderHomePage.contactBody}</Text>
            </div>
            <div className="nv-contact-banner__actions">
                <LinkButton href="/contact" variant={ButtonVariant.Primary}>
                    Get in touch <LinkButton.Icon source={arrowRightIcon} />
                </LinkButton>
                <LinkButton href={`mailto:${placeholderEmailAddress}`}>
                    {placeholderEmailAddress} <LinkButton.Icon source={mailIcon} />
                </LinkButton>
            </div>
        </div>
    </section>
);

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
