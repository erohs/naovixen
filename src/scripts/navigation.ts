import { swapFunctions, type TransitionBeforeSwapEvent } from "astro:transitions/client";

/*
 * With script, Astro's router changes pages in place, and this swap never replaces the header.
 * The open menu and both menu buttons are then the same elements on the next page, so the menu
 * closes with its own transitions while the new page appears beneath it. Cross-document view
 * transitions would do this without script, but Firefox has not shipped them.
 */

const findMenu = (): HTMLDialogElement | null => document.querySelector<HTMLDialogElement>("#menu");

const setCurrent = (link: Element, current: string | null): void => {
    if (current === null) link.removeAttribute("aria-current");
    else link.setAttribute("aria-current", current);
};

/** The kept header's links take the new page's marks; both headers hold the same links in the same order. */
const markCurrentPage = (header: Element, newHeader: Element): void => {
    const newLinks = newHeader.querySelectorAll("a[href]");
    header.querySelectorAll("a[href]").forEach((link, index) => {
        setCurrent(link, newLinks[index]?.getAttribute("aria-current") ?? null);
    });
};

/** Astro adds an announcer to the body on every page change, expecting the body to be replaced. */
const removeAnnouncers = (): void => {
    for (const announcer of document.querySelectorAll(".astro-route-announcer")) announcer.remove();
};

const swapAllButHeader = (newDocument: Document): void => {
    const page = document.getElementById("top");
    const newPage = newDocument.getElementById("top");
    const header = page?.querySelector(":scope > header");
    const newHeader = newPage?.querySelector(":scope > header");
    if (!page || !newPage || !header || !newHeader) {
        swapFunctions.swapBodyElement(newDocument.body, document.body);
        return;
    }
    markCurrentPage(header, newHeader);
    newHeader.remove();
    for (const child of [...page.children]) if (child !== header) child.remove();
    page.append(...newPage.children);
    removeAnnouncers();
};

/** Focus the reader has already moved into the page stays where it is. */
const focusPage = (): void => {
    const focused = document.activeElement;
    if (focused === null || focused === document.body || focused.closest("header") !== null) {
        document.getElementById("main")?.focus({ preventScroll: true });
    }
};

/** A link followed from the menu takes the current-page mark at once, while its page loads. */
const markChosenLink = (source: Element | undefined): void => {
    const link = source?.closest("#menu nav a[href]");
    if (!link) return;
    for (const other of link.closest("nav")?.querySelectorAll("a[href]") ?? []) setCurrent(other, null);
    setCurrent(link, "page");
};

/**
 * The menu starts closing the moment a page change starts, so nothing can leave it open.
 * Closing hands focus back to the menu button; moving it on to the main region in the same task
 * means the button is never painted with it, and the next Tab starts in the page's content.
 */
const closeMenu = (source: Element | undefined): void => {
    const menu = findMenu();
    if (!menu?.open) return;
    markChosenLink(source);
    menu.close();
    focusPage();
};

/**
 * The router's view transition is instant (see Header.astro), and the menu has always closed
 * before it starts: WebKit crashes when a modal dialog closes during a view transition. Skipping
 * the transition instead leaves WebKit crashing the next time the menu closes.
 */
const onBeforeSwap = (event: TransitionBeforeSwapEvent): void => {
    event.swap = () => {
        swapFunctions.deselectScripts(event.newDocument);
        swapFunctions.swapHeadElements(event.newDocument);
        swapAllButHeader(event.newDocument);
    };
};

export const connectNavigation = (): void => {
    document.addEventListener("astro:before-preparation", (event) => closeMenu(event.sourceElement));
    document.addEventListener("astro:before-swap", onBeforeSwap);
    document.addEventListener("astro:after-swap", focusPage);
};
