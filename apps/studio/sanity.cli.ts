import { defineCliConfig } from 'sanity/cli';

import { sanityProject } from './src/constants/SanityProject.const';

export default defineCliConfig({
    api: sanityProject,
    deployment: { autoUpdates: false },
    schemaExtraction: { enforceRequiredFields: true },
    /** Writes the query result types into cms; the Studio never imports cms. */
    typegen: {
        path: '../../packages/cms/src/**/*.ts',
        schema: 'schema.json',
        generates: '../../packages/cms/src/generated/SanityTypes.ts',
        overloadClientMethods: false,
    },
});
