/**
 * Shared by every config that sets `no-restricted-syntax`, because a later block replaces the whole list
 * rather than adding to it.
 */
export const restrictedSyntax = [
    {
        selector: "TSEnumDeclaration[const=true]",
        message:
            "const enum is banned: Vite and esbuild transpile one file at a time and cannot resolve it. Use a plain enum.",
    },
    {
        selector:
            ':not(MethodDefinition, Property[method=true], Property[kind="get"], Property[kind="set"]) > FunctionExpression',
        message: "Use an arrow function.",
    },
];
