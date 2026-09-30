import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';

import { sanityProject } from './src/constants/SanityProject.const';
import { schemaTypes } from './src/constants/SchemaTypes.const';

export default defineConfig({
    name: 'default',
    title: 'naovixen',
    ...sanityProject,
    plugins: [structureTool(), visionTool(), codeInput()],
    schema: { types: schemaTypes },
});
