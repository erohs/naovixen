export function isEmailAddress(url: string): boolean {
    return url.startsWith('mailto:');
}
