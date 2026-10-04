import { allowedComments } from "./allowed-comments.js";
import { oneComponentPerFile } from "./one-component-per-file.js";

export const naovixenPlugin = {
    meta: { name: "naovixen" },
    rules: {
        "allowed-comments": allowedComments,
        "one-component-per-file": oneComponentPerFile,
    },
};
