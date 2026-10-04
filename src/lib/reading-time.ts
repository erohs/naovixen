const wordsPerMinute = 200;

/** Minutes to read a Markdown or MDX body, leaving out code blocks and component tags. */
export const readingTime = (body: string): number => {
    const prose = body.replace(/```[\s\S]*?```/g, " ").replace(/<[^>]+>/g, " ");
    const words = prose.split(/\s+/).filter((word) => /\w/.test(word)).length;
    return Math.max(1, Math.ceil(words / wordsPerMinute));
};
