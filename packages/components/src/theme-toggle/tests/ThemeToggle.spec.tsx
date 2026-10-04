import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import type { ThemeController } from "@naovixen/theming";
import { ResolvedTheme, ThemePreference } from "@naovixen/theming";
import { ThemeToggle } from "../ThemeToggle.component";
import { createThemeControllerForTests } from "./functions/CreateThemeControllerForTests.function";

const showToggleOnSystem = (systemTheme: ResolvedTheme): ThemeController => {
    const themeController = createThemeControllerForTests(systemTheme);
    render(<ThemeToggle themeController={themeController} />);

    return themeController;
};

describe("Using ThemeToggle, given a first visit on a system in light mode, when it renders", () => {
    test("then it should be a dark mode toggle that is not pressed", () => {
        showToggleOnSystem(ResolvedTheme.Light);

        expect(screen.getByRole("button", { name: "Dark mode", pressed: false })).toBeDefined();
    });
});

describe("Using ThemeToggle, given a first visit on a system in light mode, when it is pressed", () => {
    test("then it should show as pressed", async () => {
        showToggleOnSystem(ResolvedTheme.Light);

        await userEvent.setup().click(screen.getByRole("button", { name: "Dark mode" }));

        expect(screen.getByRole("button", { name: "Dark mode", pressed: true })).toBeDefined();
    });

    test("then it should choose dark explicitly", async () => {
        const themeController = showToggleOnSystem(ResolvedTheme.Light);

        await userEvent.setup().click(screen.getByRole("button", { name: "Dark mode" }));

        expect(themeController.getState().preference).toBe(ThemePreference.Dark);
    });
});

describe("Using ThemeToggle, given a first visit on a system in dark mode, when it renders", () => {
    test("then it should show as pressed", () => {
        showToggleOnSystem(ResolvedTheme.Dark);

        expect(screen.getByRole("button", { name: "Dark mode", pressed: true })).toBeDefined();
    });
});

describe("Using ThemeToggle, given a first visit on a system in dark mode, when it is pressed from the keyboard", () => {
    test("then it should choose light explicitly", async () => {
        const themeController = showToggleOnSystem(ResolvedTheme.Dark);
        const user = userEvent.setup();

        await user.tab();
        await user.keyboard("{Enter}");

        expect(themeController.getState().preference).toBe(ThemePreference.Light);
    });
});
