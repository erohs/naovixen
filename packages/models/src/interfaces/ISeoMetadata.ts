import type { OpenGraphType } from '../enums/OpenGraphType';
import type { IImage } from './IImage';

export interface ISeoMetadata {
    readonly title: string;
    readonly description: string;
    /** Root-relative, such as `/blog/hello`. */
    readonly path: string;
    readonly type: OpenGraphType;
    readonly image?: IImage;
}
