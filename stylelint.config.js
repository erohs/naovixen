export default {
    extends: ["stylelint-config-standard", "stylelint-config-html/astro"],
    rules: {
        "declaration-no-important": true,
        "selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["global"] }],
        "selector-class-pattern": [
            "^[a-z][a-z0-9]*(-[a-z0-9]+)*(--[a-z0-9]+(-[a-z0-9]+)*)?$",
            { message: "Use kebab-case, with an optional --variant" },
        ],
        "property-disallowed-list": [
            ["/^margin-(left|right)$/", "/^padding-(left|right)$/", "left", "right"],
            { message: "Use logical properties" },
        ],
    },
};
