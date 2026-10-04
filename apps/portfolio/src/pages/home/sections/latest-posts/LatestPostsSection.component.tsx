import type { FunctionComponent } from "react";
import { arrowRightIcon, Link, LinkVariant } from "@naovixen/components";
import { PostCard } from "../../../../components/post-card/PostCard.component";
import { translate } from "../../../../translate/Translate.const";
import { HomeSection } from "../../HomeSection.component";
import type { ILatestPostsSectionProps } from "./interfaces/ILatestPostsSectionProps";

export const LatestPostsSection: FunctionComponent<ILatestPostsSectionProps> = ({ latestPosts }) => (
    <HomeSection
        heading={translate("home.latestPosts")}
        headingId="blog-title"
        intro={translate("blog.intro")}
        action={
            <Link href="/blog" variant={LinkVariant.Standalone}>
                {translate("post.allPosts")} <Link.Icon source={arrowRightIcon} />
            </Link>
        }>
        <ul className="nv-home-section__cards">
            {latestPosts.map((post) => (
                <li key={post.slug}>
                    <PostCard post={post} headingLevel={3} />
                </li>
            ))}
        </ul>
    </HomeSection>
);
