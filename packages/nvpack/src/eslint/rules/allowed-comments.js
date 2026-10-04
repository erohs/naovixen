const allowedLeadingWords =
    /^\s*(TODO|FIXME|HACK|eslint|@ts-|prettier-ignore|noinspection|#region|#endregion|global|stylelint|c8|v8)\b/;

const isDocumentation = (comment) => comment.type === "Block" && comment.value.startsWith("*");

const isTripleSlashDirective = (comment) => comment.type === "Line" && comment.value.startsWith("/ <reference");

/**
 * Lint can check a comment's form, not whether it earns its place, so the form is all this enforces:
 * TSDoc on a declaration, a marker such as TODO or HACK, or a tool directive. Never fixes, so nothing is
 * deleted on save.
 */
export const allowedComments = {
    meta: {
        type: "suggestion",
        docs: { description: "Allow only TSDoc, TODO/FIXME/HACK markers and tool directives." },
        messages: {
            disallowed:
                "Make the code say this instead. Comments are TSDoc, TODO/FIXME/HACK markers or tool directives.",
        },
        schema: [],
    },
    create: (context) => ({
        Program: () => {
            for (const comment of context.sourceCode.getAllComments()) {
                const isAllowed =
                    isDocumentation(comment) ||
                    isTripleSlashDirective(comment) ||
                    allowedLeadingWords.test(comment.value);

                if (!isAllowed) {
                    context.report({ loc: comment.loc, messageId: "disallowed" });
                }
            }
        },
    }),
};
