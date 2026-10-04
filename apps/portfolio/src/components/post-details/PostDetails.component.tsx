import type { FunctionComponent } from "react";
import { TagList, Text, TextVariant } from "@naovixen/components";
import { formatDate, formatReadingTime } from "@naovixen/utilities";
import { translate } from "../../translate/Translate.const";
import type { IPostDetailsProps } from "./interfaces/IPostDetailsProps";

export const PostDetails: FunctionComponent<IPostDetailsProps> = ({ post, className }) => (
    <div className={className}>
        <Text variant={TextVariant.Meta}>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden="true"> · </span>
            {formatReadingTime(post.readingTimeInMinutes)}
        </Text>
        <TagList tags={post.tags} label={translate("post.topics")} />
    </div>
);
