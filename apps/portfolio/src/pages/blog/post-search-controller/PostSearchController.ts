import type { IPostSearchCriteria } from "@naovixen/cms";
import type { IScheduler } from "@naovixen/utilities";
import { emptyPostSearchCriteria } from "../constants/EmptyPostSearchCriteria.const";
import { typingPauseInMilliseconds } from "./constants/TypingPauseInMilliseconds.const";
import { isSameCriteria } from "./functions/IsSameCriteria.function";

/**
 * Holds what the search form shows and decides when to search. Typing searches once the typist
 * pauses; picking a topic or clearing searches at once. Criteria arriving from the address, such as
 * after following a link to the blog, replace the form's, unless they are what it last searched for.
 */
export class PostSearchController {
    private readonly _search: (criteria: IPostSearchCriteria) => void;
    private readonly _scheduler: IScheduler;
    private readonly _listeners = new Set<() => void>();
    private _state: IPostSearchCriteria;
    private _searched: IPostSearchCriteria;
    private _cancelPending: (() => void) | undefined;

    public constructor(
        search: (criteria: IPostSearchCriteria) => void,
        scheduler: IScheduler,
        criteria: IPostSearchCriteria,
    ) {
        this._search = search;
        this._scheduler = scheduler;
        this._state = criteria;
        this._searched = criteria;
    }

    public readonly getState = (): IPostSearchCriteria => this._state;

    public readonly subscribe = (listener: () => void): (() => void) => {
        this._listeners.add(listener);

        return () => {
            this._listeners.delete(listener);
        };
    };

    public readonly setQuery = (query: string): void => {
        this._update({ ...this._state, query });
        this._cancel();
        this._cancelPending = this._scheduler.schedule(this.searchNow, typingPauseInMilliseconds);
    };

    public readonly toggleTopic = (topic: string): void => {
        const { topics } = this._state;
        const toggled = topics.includes(topic) ? topics.filter((other) => other !== topic) : [...topics, topic];

        this._update({ ...this._state, topics: toggled });
        this.searchNow();
    };

    public readonly clear = (): void => {
        this._update(emptyPostSearchCriteria);
        this.searchNow();
    };

    public readonly searchNow = (): void => {
        this._cancel();
        this._searched = this._state;
        this._search(this._state);
    };

    public readonly sync = (criteria: IPostSearchCriteria): void => {
        if (isSameCriteria(criteria, this._searched)) {
            return;
        }

        this._cancel();
        this._searched = criteria;
        this._update(criteria);
    };

    private _update(state: IPostSearchCriteria): void {
        this._state = state;
        this._listeners.forEach((listener) => {
            listener();
        });
    }

    private _cancel(): void {
        this._cancelPending?.();
        this._cancelPending = undefined;
    }
}
