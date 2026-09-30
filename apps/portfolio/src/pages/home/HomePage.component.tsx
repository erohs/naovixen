import type { FunctionComponent, ReactNode } from 'react';
import { useId } from 'react';
import { ExclamationBubble, SectionHeading } from '@naovixen/blocks';
import {
    arrowDownIcon,
    arrowRightIcon,
    ButtonVariant,
    downloadIcon,
    graduationCapIcon,
    Heading,
    HeadingSize,
    heartIcon,
    Icon,
    LinkButton,
    LinkIcon,
    mailIcon,
    pawIcon,
    Text,
    TextVariant,
    VisuallyHidden,
} from '@naovixen/components';

import { InterestList } from '../../components/interest-list/InterestList.component';
import { PhotoPlaceholder } from '../../components/photo-placeholder/PhotoPlaceholder.component';
import { PostCardList } from '../../components/post-card-list/PostCardList.component';
import { RouterLinkButton } from '../../components/router-link-button/RouterLinkButton.component';
import { RouterLinkIcon } from '../../components/router-link-icon/RouterLinkIcon.component';
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
    <section id={props.id} aria-labelledby={props.headingId} className="nx-home-section">
        <div className="nx-home-section__header">
            <SectionHeading headingId={props.headingId} intro={props.intro}>
                {props.heading}
            </SectionHeading>
            {props.action}
        </div>
        {props.children}
    </section>
);

/** "See my work" points at the experience until Phase 7 brings the projects back. */
const HeroActions: FunctionComponent = () => (
    <div className="nx-hero-actions">
        <LinkButton href="#experience" variant={ButtonVariant.Primary}>
            See my work <Icon source={arrowDownIcon} />
        </LinkButton>
        <LinkButton href={placeholderCvPath} download>
            Download CV <span className="nx-hero-actions__file-type">PDF</span>
            <Icon source={downloadIcon} />
        </LinkButton>
    </div>
);

const HeroSection: FunctionComponent = () => (
    <section aria-labelledby="hero-title" className="nx-hero-section">
        <ExclamationBubble>{placeholderHomePage.greeting}</ExclamationBubble>
        <Heading level={1} size={HeadingSize.Display} id="hero-title">
            Naomi{' '}
            <span className="nx-hero-section__surname">
                <span className="nx-hero-section__highlight">Shore</span>
                <Icon source={pawIcon} className="nx-hero-section__paw" />
            </span>
        </Heading>
        <Text variant={TextVariant.Lead} className="nx-hero-section__summary">
            {placeholderHomePage.summary}
        </Text>
        <HeroActions />
    </section>
);

/** A short introduction, with a link to the full about page. */
const AboutSummary: FunctionComponent = () => (
    <div className="nx-about-summary">
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
    </div>
);

const AboutSection: FunctionComponent = () => (
    <section aria-labelledby="about-title" className="nx-about-section">
        <div className="nx-about-section__columns">
            <AboutSummary />
            <div className="nx-about-section__photo">
                <PhotoPlaceholder description={placeholderPhotoDescription} />
                <Icon source={heartIcon} className="nx-about-section__heart" />
            </div>
        </div>
    </section>
);

/** A step on the employer's timeline. The dot and the line to the next step are drawn by the stylesheet. */
const EmployerRole: FunctionComponent<{ readonly role: IRole }> = ({ role }) => (
    <li className="nx-employer-role">
        <div className="nx-employer-role__header">
            <Heading level={4} className="nx-employer-role__title">
                {role.title}
            </Heading>
            <Text variant={TextVariant.Meta}>{role.dates}</Text>
        </div>
        <Text className="nx-employer-role__summary">{role.summary}</Text>
    </li>
);

const EmployerHistory: FunctionComponent = () => (
    <div className="nx-employer-history">
        <div className="nx-employer-history__header">
            <div className="nx-employer-history__name">
                <Heading level={3} size={HeadingSize.H4}>
                    {employer.name}
                    <span className="nx-employer-history__place">, {employer.place}</span>
                </Heading>
                <Text variant={TextVariant.Small}>{employer.description}</Text>
            </div>
            <Text variant={TextVariant.Meta}>{employer.dates}</Text>
        </div>
        <ol className="nx-employer-history__roles">
            {employer.roles.map((role) => (
                <EmployerRole key={role.title} role={role} />
            ))}
        </ol>
    </div>
);

const EducationSummary: FunctionComponent = () => (
    <div className="nx-education-summary">
        <Icon source={graduationCapIcon} className="nx-education-summary__icon" />
        <div className="nx-education-summary__header">
            <Heading level={3} className="nx-education-summary__degree">
                {education.degree}
            </Heading>
            <Text variant={TextVariant.Meta}>{education.dates}</Text>
        </div>
        <Text>
            {education.institution} · <strong>{education.grade}</strong>
        </Text>
        <Text className="nx-education-summary__note">{education.note}</Text>
    </div>
);

const ExperienceSection: FunctionComponent = () => (
    <HomeSection
        id="experience"
        heading="Experience"
        headingId="experience-title"
        intro={placeholderHomePage.experienceIntro}
        action={
            <LinkIcon href={placeholderCvPath} download icon={arrowRightIcon}>
                Full CV<VisuallyHidden> (PDF)</VisuallyHidden>
            </LinkIcon>
        }
    >
        <div className="nx-experience-section">
            <EmployerHistory />
            <EducationSummary />
        </div>
    </HomeSection>
);

/** The logo repeats the name written beneath it, so the icon stays hidden from screen readers. */
const SkillGroup: FunctionComponent<{ readonly group: ISkillGroup }> = ({ group }) => {
    const headingId = useId();

    return (
        <section aria-labelledby={headingId} className="nx-skill-group">
            <Heading level={3} id={headingId} className="nx-skill-group__label">
                {group.label}
            </Heading>
            <ul className="nx-skill-group__skills">
                {group.skills.map((skill) => (
                    <li key={skill.name} className="nx-skill-tile">
                        <span className="nx-skill-tile__logo">
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
        <div className="nx-skills-section__groups">
            {placeholderSkillGroups.map((group) => (
                <SkillGroup key={group.label} group={group} />
            ))}
        </div>
    </HomeSection>
);

/** Who said it. The striped circle stands in for their photo until there is one. */
const TestimonialAttribution: FunctionComponent = () => (
    <figcaption className="nx-testimonial-attribution">
        <span
            role="img"
            aria-label={`Photo placeholder: ${placeholderTestimonial.name}`}
            className="nx-testimonial-attribution__photo"
        />
        <span className="nx-testimonial-attribution__text">
            <span className="nx-testimonial-attribution__name">{placeholderTestimonial.name}</span>
            <span className="nx-testimonial-attribution__role">{placeholderTestimonial.role}</span>
        </span>
    </figcaption>
);

/** The heading only names the landmark; the quote speaks for itself on screen. */
const TestimonialSection: FunctionComponent = () => (
    <section aria-labelledby="testimonial-title" className="nx-testimonial-section">
        <Heading level={2} id="testimonial-title" className="nx-visually-hidden">
            Testimonial
        </Heading>
        <figure className="nx-testimonial-section__figure">
            <blockquote className="nx-testimonial-section__quote">
                <p>{placeholderTestimonial.quote}</p>
            </blockquote>
            <TestimonialAttribution />
        </figure>
    </section>
);

const LatestPostsSection: FunctionComponent<IHomePageProps> = ({ latestPosts }) => (
    <HomeSection
        heading="From the blog"
        headingId="blog-title"
        intro={placeholderBlogIntro}
        action={
            <RouterLinkIcon to="/blog" icon={arrowRightIcon}>
                All posts
            </RouterLinkIcon>
        }
    >
        <PostCardList posts={latestPosts} headingLevel={3} />
    </HomeSection>
);

const ContactBanner: FunctionComponent = () => (
    <section aria-labelledby="contact-title" className="nx-contact-banner">
        <div className="nx-contact-banner__panel">
            <div className="nx-contact-banner__text">
                <Heading level={2} size={HeadingSize.H3} id="contact-title">
                    {placeholderHomePage.contactHeading}
                </Heading>
                <Text>{placeholderHomePage.contactBody}</Text>
            </div>
            <div className="nx-contact-banner__actions">
                <RouterLinkButton to="/contact" variant={ButtonVariant.Primary}>
                    Get in touch <Icon source={arrowRightIcon} />
                </RouterLinkButton>
                <LinkButton href={`mailto:${placeholderEmailAddress}`}>
                    {placeholderEmailAddress} <Icon source={mailIcon} />
                </LinkButton>
            </div>
        </div>
    </section>
);

/** Featured projects join between the hero and about sections in Phase 7. */
export const HomePage: FunctionComponent<IHomePageProps> = ({ latestPosts }) => (
    <>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <TestimonialSection />
        <LatestPostsSection latestPosts={latestPosts} />
        <ContactBanner />
    </>
);
