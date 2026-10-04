import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { codeTitle } from "./src/lib/code-title";

export default defineConfig({
    site: "https://naovixen.com",
    trailingSlash: "always",
    build: { format: "directory" },
    scopedStyleStrategy: "where",
    /* Keeps one space where markup breaks across lines; the default drops it between inline elements. */
    compressHTML: true,
    integrations: [mdx(), sitemap()],
    image: { layout: "constrained" },
    markdown: {
        shikiConfig: {
            themes: { light: "github-light", dark: "github-dark" },
            defaultColor: "light-dark()",
            transformers: [codeTitle],
        },
    },
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Schibsted Grotesk",
            cssVariable: "--font-schibsted-grotesk",
            weights: ["400 700"],
            subsets: ["latin"],
            fallbacks: ["sans-serif"],
        },
        {
            provider: fontProviders.fontsource(),
            name: "Fredoka",
            cssVariable: "--font-fredoka",
            weights: ["400 700"],
            subsets: ["latin"],
            fallbacks: ["sans-serif"],
        },
        {
            provider: fontProviders.fontsource(),
            name: "JetBrains Mono",
            cssVariable: "--font-jetbrains-mono",
            weights: ["400 700"],
            subsets: ["latin"],
            fallbacks: ["monospace"],
        },
        {
            provider: fontProviders.fontsource(),
            name: "Gochi Hand",
            cssVariable: "--font-gochi-hand",
            weights: [400],
            subsets: ["latin"],
            fallbacks: ["cursive"],
        },
    ],
});
