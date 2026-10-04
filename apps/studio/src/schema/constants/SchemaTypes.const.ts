import { bodyBlockTypes } from "../body/constants/BodyBlockTypes.const";
import { postType } from "../post/constants/PostType.const";
import { privacyNoticeType } from "../privacy-notice/constants/PrivacyNoticeType.const";
import { projectType } from "../project/constants/ProjectType.const";
import { tagType } from "../tag/constants/TagType.const";

export const schemaTypes = [postType, projectType, tagType, privacyNoticeType, ...bodyBlockTypes];
