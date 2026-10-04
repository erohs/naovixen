import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { codeTitle } from "./src/lib/code-title";

export default defineConfig({
    site: "https://naovixen.com",
    trailingSlash: "always",
    build: { format: "directory" },
    scopedStyleStrategy: "where",
    /* The toolbar injects hidden, focusable controls, so dev would no longer behave like the built site. */
    devToolbar: { enabled: false },
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
    /*
     * "optional" uses a cached or preloaded font from the first frame and otherwise keeps the
     * size-matched fallback for that page, so text never shifts when a font swaps in mid-view.
     */
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Schibsted Grotesk",
            cssVariable: "--font-schibsted-grotesk",
            weights: ["400 700"],
            subsets: ["latin"],
            fallbacks: ["sans-serif"],
            display: "optional",
        },
        {
            provider: fontProviders.fontsource(),
            name: "Fredoka",
            cssVariable: "--font-fredoka",
            weights: ["400 700"],
            subsets: ["latin"],
            fallbacks: ["sans-serif"],
            display: "optional",
        },
        {
            provider: fontProviders.fontsource(),
            name: "JetBrains Mono",
            cssVariable: "--font-jetbrains-mono",
            weights: ["400 700"],
            subsets: ["latin"],
            fallbacks: ["monospace"],
            display: "optional",
        },
        {
            provider: fontProviders.fontsource(),
            name: "Gochi Hand",
            cssVariable: "--font-gochi-hand",
            weights: [400],
            subsets: ["latin"],
            fallbacks: ["cursive"],
            display: "optional",
        },
    ],
});
