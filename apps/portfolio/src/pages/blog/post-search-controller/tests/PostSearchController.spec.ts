import type { IPostSearchCriteria } from "@naovixen/cms";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { timeoutScheduler } from "@naovixen/components";
import { PostSearchController } from "../PostSearchController";

const empty: IPostSearchCriteria = { query: "", topics: [] };

let search: ReturnType<typeof vi.fn<(criteria: IPostSearchCriteria) => void>>;
let controller: PostSearchController;

beforeEach(() => {
    vi.useFakeTimers();
    search = vi.fn();
    controller = new PostSearchController(search, timeoutScheduler, empty);
});

describe("Using PostSearchController, when words are typed", () => {
    test("then it should show them straight away", () => {
        controller.setQuery("foc");

        expect(controller.getState().query).toBe("foc");
    });

    test("then it should not search while the typist keeps going", () => {
        controller.setQuery("f");
        vi.advanceTimersByTime(100);
        controller.setQuery("fo");
        vi.advanceTimersByTime(299);

        expect(search).not.toHaveBeenCalled();
    });

    test("then it should search once, for the last words, after the typist pauses", () => {
        controller.setQuery("f");
        vi.advanceTimersByTime(100);
        controller.setQuery("fo");
        vi.advanceTimersByTime(300);

        expect(search).toHaveBeenCalledExactlyOnceWith({ query: "fo", topics: [] });
    });
});

describe("Using PostSearchController, when a topic is ticked and then unticked", () => {
    test("then it should search at once each time", () => {
        controller.toggleTopic("CSS");
        controller.toggleTopic("CSS");

        expect(search.mock.calls).toEqual([[{ query: "", topics: ["CSS"] }], [empty]]);
    });
});

describe("Using PostSearchController, given a pending search, when the search is cleared", () => {
    test("then it should search for everything and drop the pending search", () => {
        controller.setQuery("focus");
        controller.clear();
        vi.runAllTimers();

        expect(search.mock.calls).toEqual([[empty]]);
    });
});

describe("Using PostSearchController, given words still being typed, when the last search's results arrive", () => {
    test("then it should keep the newer words", () => {
        controller.setQuery("fo");
        vi.runAllTimers();
        controller.setQuery("foc");

        controller.sync({ query: "fo", topics: [] });

        expect(controller.getState().query).toBe("foc");
    });
});

describe("Using PostSearchController, given a pending search, when other criteria arrive from the address", () => {
    beforeEach(() => {
        controller.setQuery("focus");
        controller.sync({ query: "", topics: ["CSS"] });
        vi.runAllTimers();
    });

    test("then it should show them", () => {
        expect(controller.getState()).toEqual({ query: "", topics: ["CSS"] });
    });

    test("then it should drop the pending search", () => {
        expect(search).not.toHaveBeenCalled();
    });
});
