import { describeResults, describeSelectedTopics } from "../lib/describe-search";
import { searchPosts, type ISearchablePost, type ISearchCriteria } from "../lib/search-posts";

interface IPostSearchParts {
    form: HTMLFormElement;
    query: HTMLInputElement;
    boxes: HTMLInputElement[];
    chips: HTMLElement[];
    chosen: HTMLElement | null;
    summary: HTMLElement;
    clear: HTMLButtonElement;
    announcer: HTMLElement;
    list: HTMLElement;
    cards: HTMLElement[];
    noMatches: HTMLElement;
}

const typingPause = 300;
const announcementDelay = 200;
const announcementLifetime = 5 * 60 * 1000;

let index: Promise<ISearchablePost[]> | undefined;

/** Fetched once, when a reader first searches. A failed fetch is forgotten, so the next search tries again. */
const loadIndex = (): Promise<ISearchablePost[]> =>
    (index ??= fetch("/blog/search.json")
        .then((response) => response.json() as Promise<ISearchablePost[]>)
        .catch((error: unknown) => {
            index = undefined;
            throw error;
        }));

const one = <T extends Element>(scope: ParentNode, selector: string): T => {
    const element = scope.querySelector<T>(selector);
    if (element === null) throw new Error(`The blog search is missing ${selector}.`);
    return element;
};

const partsOf = (form: HTMLFormElement): IPostSearchParts => ({
    form,
    query: one(form, 'input[name="query"]'),
    boxes: [...form.querySelectorAll<HTMLInputElement>('input[name="topics"]')],
    chips: [...form.querySelectorAll<HTMLElement>("[data-chip]")],
    chosen: form.querySelector<HTMLElement>("[data-topics-chosen]"),
    summary: one(form, "[data-summary]"),
    clear: one(form, "[data-clear]"),
    announcer: one(form, "[data-announcer]"),
    list: one(document, "[data-post-list]"),
    cards: [...document.querySelectorAll<HTMLElement>("[data-post-id]")],
    noMatches: one(document, "[data-no-matches]"),
});

const readCriteria = (parts: IPostSearchParts): ISearchCriteria => ({
    query: parts.query.value,
    topics: parts.boxes.filter((box) => box.checked).map((box) => box.value),
});

const writeCriteria = (parts: IPostSearchParts, criteria: ISearchCriteria): void => {
    parts.query.value = criteria.query;
    for (const box of parts.boxes) box.checked = criteria.topics.includes(box.value);
};

const criteriaFromAddress = (): ISearchCriteria => {
    const parameters = new URLSearchParams(location.search);
    return { query: parameters.get("query") ?? "", topics: parameters.getAll("topics") };
};

/** Replaces the history entry rather than adding one, so Back leaves the blog instead of undoing a letter. */
const saveToAddress = (criteria: ISearchCriteria): void => {
    const parameters = new URLSearchParams();
    if (criteria.query.trim() !== "") parameters.set("query", criteria.query.trim());
    for (const topic of criteria.topics) parameters.append("topics", topic);
    const search = parameters.toString();
    history.replaceState(history.state, "", search === "" ? location.pathname : `?${search}`);
};

const showCards = (parts: IPostSearchParts, ids: string[]): void => {
    const cardFor = new Map(parts.cards.map((card) => [card.dataset["postId"], card]));
    for (const card of parts.cards) card.hidden = !ids.includes(card.dataset["postId"] ?? "");
    parts.list.append(...ids.flatMap((id) => cardFor.get(id) ?? []));
    parts.list.hidden = ids.length === 0;
    parts.noMatches.hidden = ids.length > 0;
};

const showControls = (parts: IPostSearchParts, criteria: ISearchCriteria): void => {
    for (const chip of parts.chips) chip.hidden = !criteria.topics.includes(chip.dataset["chip"] ?? "");
    if (parts.chosen !== null) parts.chosen.textContent = describeSelectedTopics(criteria.topics);
    parts.clear.hidden = criteria.query.trim() === "" && criteria.topics.length === 0;
};

let announcementTimers: number[] = [];

/** Empties the region first, so a repeated message is read again, and clears it after a while. */
const announce = (region: HTMLElement, message: string): void => {
    announcementTimers.forEach(clearTimeout);
    region.textContent = "";
    announcementTimers = [
        window.setTimeout(() => (region.textContent = message), announcementDelay),
        window.setTimeout(() => (region.textContent = ""), announcementLifetime),
    ];
};

const search = async (parts: IPostSearchParts, isAnnounced = true): Promise<void> => {
    const criteria = readCriteria(parts);
    const posts = await loadIndex();
    // A search still pending when the router changes page must not write to the next page's address.
    if (!parts.form.isConnected) return;
    const ids = searchPosts(posts, criteria);
    showCards(parts, ids);
    showControls(parts, criteria);
    const message = describeResults(ids.length, posts.length, criteria);
    parts.summary.textContent = message;
    saveToAddress(criteria);
    if (isAnnounced) announce(parts.announcer, message);
};

/** Focus moves to the next chip, else the previous, else the search field, as the removed one goes. */
const focusAfterRemoving = (parts: IPostSearchParts, chip: HTMLElement): void => {
    const shown = parts.chips.filter((each) => !each.hidden);
    const position = shown.indexOf(chip);
    const neighbour = shown[position + 1] ?? shown[position - 1];
    (neighbour?.querySelector("button") ?? parts.query).focus();
};

const listenToFields = (parts: IPostSearchParts): void => {
    let pause: number | undefined;
    parts.form.addEventListener("submit", (event) => {
        event.preventDefault();
        void search(parts);
    });
    parts.query.addEventListener("input", () => {
        window.clearTimeout(pause);
        pause = window.setTimeout(() => void search(parts), typingPause);
    });
    for (const box of parts.boxes) box.addEventListener("change", () => void search(parts));
};

const listenToButtons = (parts: IPostSearchParts): void => {
    for (const chip of parts.chips) {
        chip.querySelector("button")?.addEventListener("click", () => {
            focusAfterRemoving(parts, chip);
            for (const box of parts.boxes) if (box.value === chip.dataset["chip"]) box.checked = false;
            void search(parts);
        });
    }
    parts.clear.addEventListener("click", () => {
        parts.query.focus();
        writeCriteria(parts, { query: "", topics: [] });
        void search(parts);
    });
};

/** Escape closes the topic panel, with focus back on its button, as other disclosures do. */
const closeOnEscape = (form: HTMLFormElement): void => {
    const details = form.querySelector("details");
    details?.addEventListener("keydown", (event) => {
        if (event.key !== "Escape" || !details.open) return;
        details.open = false;
        details.querySelector("summary")?.focus();
    });
};

/** Searches as the reader types or picks topics, and takes up whatever the address asks for. */
export const connectPostSearch = (): void => {
    const form = document.querySelector<HTMLFormElement>("[data-post-search]");
    if (form === null) return;
    const parts = partsOf(form);
    listenToFields(parts);
    listenToButtons(parts);
    closeOnEscape(form);
    const fromAddress = criteriaFromAddress();
    if (fromAddress.query !== "" || fromAddress.topics.length > 0) {
        writeCriteria(parts, fromAddress);
        void search(parts, false);
    }
};
