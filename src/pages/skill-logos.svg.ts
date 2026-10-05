import type { APIRoute } from "astro";
import { skillGroups } from "../data/skills";

const sources = import.meta.glob<string>("../icons/*.svg", { query: "?raw", import: "default", eager: true });

const symbolFor = (name: string): string => {
    const source = sources[`../icons/${name}.svg`];
    if (source === undefined) throw new Error(`No icon named "${name}" in src/icons.`);
    return source
        .trim()
        .replace('<svg xmlns="http://www.w3.org/2000/svg"', `<symbol id="${name}"`)
        .replace(/<\/svg>$/, "</symbol>");
};

/**
 * The skill logos as one sprite for <use>, which keeps them in the text colour. Inlined, they were
 * two thirds of the home page, which then took an extra round trip to arrive.
 */
export const GET: APIRoute = () => {
    const names = new Set(skillGroups.flatMap((group) => group.skills.map((skill) => skill.icon)));
    const symbols = [...names].map(symbolFor).join("");
    return new Response(`<svg xmlns="http://www.w3.org/2000/svg">${symbols}</svg>`, {
        headers: { "Content-Type": "image/svg+xml" },
    });
};
