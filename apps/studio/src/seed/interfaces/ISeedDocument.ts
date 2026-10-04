export interface ISeedDocument {
    readonly _id: string;
    readonly _type: string;
    readonly [field: string]: unknown;
}
