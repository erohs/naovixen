import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { FormattedMessage } from "../FormattedMessage.component";

describe("Using FormattedMessage, given a message with bold words, when it renders", () => {
    test("then it should make those words strong", () => {
        render(<FormattedMessage message="Leeds · <strong>First Class Honours</strong>" />);

        expect(screen.getByText("First Class Honours").tagName).toBe("STRONG");
    });
});

describe("Using FormattedMessage, given a tag the caller maps to a link, when it renders", () => {
    test("then it should render the link around the tag's words", () => {
        render(
            <FormattedMessage
                message="Email <email>me</email> any time."
                elements={{ email: (children) => <a href="mailto:someone@example.com">{children}</a> }}
            />,
        );

        expect(screen.getByRole("link", { name: "me" })).toBeDefined();
    });
});

describe("Using FormattedMessage, given a tag nobody maps, when it renders", () => {
    test("then it should show the tag as text rather than build an element", () => {
        render(<FormattedMessage message="<img>" />);

        expect(screen.getByText("<img>")).toBeDefined();
    });
});
