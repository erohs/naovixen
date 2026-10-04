import type { StructureResolver } from "sanity/structure";
import { singletonTypes } from "../constants/SingletonTypes.const";

/** Each singleton opens its one document; every other type lists its documents as usual. */
export const buildStructure: StructureResolver = (structure) =>
    structure
        .list()
        .title("Content")
        .items([
            ...structure.documentTypeListItems().filter((item) => !singletonTypes.has(item.getId() ?? "")),
            structure.divider(),
            ...[...singletonTypes].map((typeName) =>
                structure
                    .documentTypeListItem(typeName)
                    .child(structure.document().schemaType(typeName).documentId(typeName)),
            ),
        ]);
