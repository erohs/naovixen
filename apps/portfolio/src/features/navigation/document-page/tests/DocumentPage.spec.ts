import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { DocumentPage } from "../DocumentPage";

afterEach(() => {
    document.body.innerHTML = "";
});

describe("Using DocumentPage, given main content with a heading, when the heading is focused", () => {
    beforeEach(() => {
        document.body.innerHTML = '<main id="main" tabindex="-1"><h1>About me</h1></main>';
        new DocumentPage().focusHeading();
    });

    test("then it should focus the heading", () => {
        expect(document.activeElement?.textContent).toBe("About me");
    });

    test("then it should make the heading focusable by script only", () => {
        expect(document.querySelector("h1")?.getAttribute("tabindex")).toBe("-1");
    });
});

describe("Using DocumentPage, given main content without a heading, when the heading is focused", () => {
    test("then it should focus the main content", () => {
        document.body.innerHTML = '<main id="main" tabindex="-1"><p>No heading</p></main>';

        new DocumentPage().focusHeading();

        expect(document.activeElement?.id).toBe("main");
    });
});
