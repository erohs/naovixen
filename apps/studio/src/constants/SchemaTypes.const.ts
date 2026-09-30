import { bodyBlockTypes } from './BodyBlockTypes.const';
import { postType } from './PostType.const';
import { projectType } from './ProjectType.const';
import { tagType } from './TagType.const';

export const schemaTypes = [postType, projectType, tagType, ...bodyBlockTypes];
