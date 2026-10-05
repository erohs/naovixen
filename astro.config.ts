import { defineConfig, fontProviders } from "astro/config";
import type { AstroUserConfig } from "astro";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { codeTitle } from "./src/lib/code-title";
import { site } from "./src/site";

type FontFamily = NonNullable<AstroUserConfig["fonts"]>[number];

/**
 * A Fontsource font served from this site, latin only and upright only, since nothing is set in
 * italic. "optional" uses a cached or preloaded font from the first frame and otherwise keeps the
 * size-matched fallback for that page, so text never shifts when a font swaps in mid-view.
 */
const selfHosted = (
    name: string,
    cssVariable: string,
    fallback: string,
    weights: [string | number] = ["400 700"],
): FontFamily => ({
    provider: fontProviders.fontsource(),
    name,
    cssVariable,
    weights,
    styles: ["normal"],
    subsets: ["latin"],
    fallbacks: [fallback],
    display: "optional",
});

export default defineConfig({
    site: site.origin,
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
    fonts: [
        selfHosted("Schibsted Grotesk", "--font-schibsted-grotesk", "sans-serif"),
        selfHosted("Fredoka", "--font-fredoka", "sans-serif"),
        selfHosted("JetBrains Mono", "--font-jetbrains-mono", "monospace"),
        selfHosted("Gochi Hand", "--font-gochi-hand", "cursive", [400]),
    ],
});
