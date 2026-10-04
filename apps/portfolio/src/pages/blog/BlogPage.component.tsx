import type { FunctionComponent } from "react";
import { Breadcrumb, Heading, Text } from "@naovixen/components";
import { PostCard } from "../../components/post-card/PostCard.component";
import { homeBreadcrumbTrail } from "../../features/site/constants/HomeBreadcrumbTrail.const";
import { translate } from "../../translate/Translate.const";
import type { IBlogPageProps } from "./interfaces/IBlogPageProps";

export const BlogPage: FunctionComponent<IBlogPageProps> = ({ posts }) => (
    <div className="nv-page">
        <Breadcrumb trail={homeBreadcrumbTrail} currentLabel={translate("navigation.blog")} />
        <header className="nv-blog-page__header">
            <Heading level={1}>{translate("blog.title")}</Heading>
            <Text className="nv-blog-page__intro">{translate("blog.intro")}</Text>
        </header>
        {posts.length === 0 ? (
            <Text>{translate("blog.empty")}</Text>
        ) : (
            <ul className="nv-blog-page__posts">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <PostCard post={post} headingLevel={2} />
                    </li>
                ))}
            </ul>
        )}
    </div>
);
