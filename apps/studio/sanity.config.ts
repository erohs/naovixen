import { defineConfig } from 'sanity';
import { presentationTool } from 'sanity/presentation';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';

import { presentationLocations } from './src/constants/PresentationLocations.const';
import { previewOrigin } from './src/constants/PreviewOrigin.const';
import { sanityProject } from './src/constants/SanityProject.const';
import { schemaTypes } from './src/constants/SchemaTypes.const';

export default defineConfig({
    name: 'default',
    title: 'naovixen',
    ...sanityProject,
    plugins: [
        structureTool(),
        presentationTool({
            previewUrl: {
                initial: previewOrigin,
                previewMode: { enable: '/api/preview/enable', disable: '/api/preview/disable' },
            },
            allowOrigins: ['http://localhost:3000', 'https://naovixen.com'],
            resolve: { locations: presentationLocations },
        }),
        visionTool(),
        codeInput(),
    ],
    schema: { types: schemaTypes },
});
