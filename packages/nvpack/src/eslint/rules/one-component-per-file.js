const isComponentName = (name) => /^[A-Z]/.test(name);

const containsJsx = (node) => {
    const pending = [node];

    while (pending.length > 0) {
        const current = pending.pop();

        if (current.type === "JSXElement" || current.type === "JSXFragment") {
            return true;
        }

        for (const [key, value] of Object.entries(current)) {
            if (key === "parent") {
                continue;
            }

            for (const child of Array.isArray(value) ? value : [value]) {
                if (child !== null && typeof child === "object" && typeof child.type === "string") {
                    pending.push(child);
                }
            }
        }
    }

    return false;
};

const isComponentDeclarator = (declarator) =>
    declarator.id.type === "Identifier" &&
    isComponentName(declarator.id.name) &&
    (declarator.init?.type === "ArrowFunctionExpression" || declarator.init?.type === "FunctionExpression") &&
    containsJsx(declarator.init);

const findComponentDeclarators = (statement) => {
    const declaration = statement.type === "ExportNamedDeclaration" ? statement.declaration : statement;

    return declaration?.type === "VariableDeclaration" ? declaration.declarations.filter(isComponentDeclarator) : [];
};

/** A compound's parts are attached with `Object.assign`, which is not a function, so they are not counted. */
export const oneComponentPerFile = {
    meta: {
        type: "suggestion",
        docs: { description: "Allow one React component per file." },
        messages: { extra: "One component per file. Move {{name}} to a file of its own." },
        schema: [],
    },
    create: (context) => ({
        Program: (program) => {
            const components = program.body.flatMap(findComponentDeclarators);

            for (const extra of components.slice(1)) {
                context.report({ node: extra, messageId: "extra", data: { name: extra.id.name } });
            }
        },
    }),
};
