import { defineConfig, fontProviders } from "astro/config";
import type { AstroUserConfig } from "astro";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { codeTitle } from "./src/lib/code-title";
import { site } from "./src/site";

type FontFamily = NonNullable<AstroUserConfig["fonts"]>[number];

/** A Fontsource font served from this site, latin only and upright only, since nothing is set in italic. */
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
    /* The router would otherwise prefetch every link; pages come from Cloudflare's cache instead. */
    prefetch: false,
    vite: {
        build: {
            /*
             * Astro inlines small scripts, and the content security policy allows inline scripts
             * only by their hashes. Bundled scripts stay files, so only the head script needs one.
             */
            assetsInlineLimit: 0,
            /*
             * One stylesheet for every page. A page change in place then never adds a stylesheet,
             * which would apply a moment after the new page first paints, and never waits for one.
             */
            cssCodeSplit: false,
        },
    },
    image: { layout: "constrained" },
    markdown: {
        shikiConfig: {
            themes: { light: "github-light-default", dark: "github-dark-default" },
            defaultColor: "light-dark()",
            transformers: [codeTitle],
        },
    },
    fonts: [
        selfHosted("Schibsted Grotesk", "--font-schibsted-grotesk", "sans-serif"),
        selfHosted("Fredoka", "--font-fredoka", "sans-serif", [600]),
        selfHosted("Gochi Hand", "--font-gochi-hand", "cursive", [400]),
    ],
});
