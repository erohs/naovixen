import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import type { UserEvent } from "@testing-library/user-event";
import type { FunctionComponent } from "react";
import { describe, expect, test } from "vitest";
import { Header } from "../Header.component";

const items = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
];

const PageWithHeader: FunctionComponent<{ readonly path: string }> = ({ path }) => (
    <>
        <Header logo="naovixen" items={items} currentHref={path} />
        <main>
            <a href="/blog">Behind the menu</a>
        </main>
    </>
);

interface IOpenMenu {
    readonly user: UserEvent;
    readonly showPath: (path: string) => void;
}

const openMenuOnHomePage = async (): Promise<IOpenMenu> => {
    const user = userEvent.setup();
    const { rerender } = render(<PageWithHeader path="/" />);
    await user.click(screen.getByRole("button", { name: "Menu" }));

    const showPath = (path: string): void => {
        rerender(<PageWithHeader path={path} />);
    };

    return { user, showPath };
};

describe("Using Header, given its menu is closed, when it renders", () => {
    test("then it should offer a collapsed menu button", () => {
        render(<PageWithHeader path="/" />);

        expect(screen.getByRole("button", { name: "Menu", expanded: false })).toBeDefined();
    });
});

describe("Using Header, given its menu is closed, when the button is pressed", () => {
    test("then it should show as expanded", async () => {
        await openMenuOnHomePage();

        expect(screen.getByRole("button", { name: "Menu", expanded: true })).toBeDefined();
    });

    test("then it should make the page behind the menu inert", async () => {
        await openMenuOnHomePage();

        expect(screen.getByRole("main", { hidden: true }).inert).toBe(true);
    });
});

describe("Using Header, given its menu is open, when the button is pressed again", () => {
    test("then it should give the page back", async () => {
        const { user } = await openMenuOnHomePage();

        await user.click(screen.getByRole("button", { name: "Menu" }));

        expect(screen.getByRole("main").inert).toBe(false);
    });
});

describe("Using Header, given its menu is open, when the path changes", () => {
    test("then it should close", async () => {
        const { showPath } = await openMenuOnHomePage();

        showPath("/work");

        expect(screen.getByRole("button", { name: "Menu", expanded: false })).toBeDefined();
    });
});

describe("Using Header, given its menu was opened on a page and the path has moved on, when that page is shown again", () => {
    test("then it should stay closed", async () => {
        const { showPath } = await openMenuOnHomePage();
        showPath("/work");

        showPath("/");

        expect(screen.getByRole("button", { name: "Menu", expanded: false })).toBeDefined();
    });
});

describe("Using Header, given its menu is open and focus is on one of its links, when Escape is pressed", () => {
    test("then it should close", async () => {
        const { user } = await openMenuOnHomePage();
        await user.tab();

        await user.keyboard("{Escape}");

        expect(screen.getByRole("button", { name: "Menu", expanded: false })).toBeDefined();
    });

    test("then it should put focus back on the button, so Enter reopens it", async () => {
        const { user } = await openMenuOnHomePage();
        await user.tab();
        await user.keyboard("{Escape}");

        await user.keyboard("{Enter}");

        expect(screen.getByRole("button", { name: "Menu", expanded: true })).toBeDefined();
    });
});

describe("Using Header, given its menu is open and focus is on the logo, when Shift+Tab is pressed", () => {
    test("then it should wrap focus round to the menu's last link", async () => {
        const { user } = await openMenuOnHomePage();
        screen.getByRole("link", { name: "naovixen" }).focus();

        await user.tab({ shift: true });

        expect(screen.getAllByRole("link", { name: "Work" }).at(-1)?.matches(":focus")).toBe(true);
    });
});

describe("Using Header, given its menu is open and focus is on the menu's last link, when Tab is pressed", () => {
    test("then it should wrap focus round to the logo", async () => {
        const { user } = await openMenuOnHomePage();
        screen.getAllByRole("link", { name: "Work" }).at(-1)?.focus();

        await user.tab();

        expect(screen.getByRole("link", { name: "naovixen" }).matches(":focus")).toBe(true);
    });
});

describe("Using Header, given its menu is open, when the link to the page already shown is followed", () => {
    test("then it should close", async () => {
        const { user } = await openMenuOnHomePage();

        await user.click(screen.getAllByRole("link", { name: "Home" }).at(-1) ?? document.body);

        expect(screen.getByRole("button", { name: "Menu", expanded: false })).toBeDefined();
    });

    test("then it should put focus back on the menu button", async () => {
        const { user } = await openMenuOnHomePage();

        await user.click(screen.getAllByRole("link", { name: "Home" }).at(-1) ?? document.body);

        expect(screen.getByRole("button", { name: "Menu" }).matches(":focus")).toBe(true);
    });
});
