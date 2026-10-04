import type { FunctionComponent } from "react";
import { Breadcrumb, Heading, Text } from "@naovixen/components";
import { homeBreadcrumbTrail } from "../../features/site/constants/HomeBreadcrumbTrail.const";
import { translate } from "../../translate/Translate.const";
import type { IBlogPageProps } from "./interfaces/IBlogPageProps";
import { PostList } from "./sections/post-list/PostList.component";
import { PostSearch } from "./sections/post-search/PostSearch.component";

/** With no posts at all there is nothing to search, so only the empty message shows. */
export const BlogPage: FunctionComponent<IBlogPageProps> = (props) => (
    <div className="nv-page">
        <Breadcrumb trail={homeBreadcrumbTrail} currentLabel={translate("navigation.blog")} />
        <header className="nv-blog-page__header">
            <Heading level={1}>{translate("blog.title")}</Heading>
            <Text className="nv-blog-page__intro">{translate("blog.intro")}</Text>
        </header>
        {props.result.totalCount === 0 ? (
            <Text>{translate("blog.empty")}</Text>
        ) : (
            <>
                <PostSearch {...props} />
                <PostList posts={props.result.posts} />
            </>
        )}
    </div>
);
