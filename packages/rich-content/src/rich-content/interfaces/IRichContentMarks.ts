import type { PortableTextMarkComponent } from "@portabletext/react";
import type { ILinkMarkValue } from "./ILinkMarkValue";

/** The marks the site styles; the index signature lets Portable Text take the whole map. */
export interface IRichContentMarks extends Readonly<Record<string, PortableTextMarkComponent | undefined>> {
    readonly code: PortableTextMarkComponent;
    readonly link: PortableTextMarkComponent<ILinkMarkValue>;
}
