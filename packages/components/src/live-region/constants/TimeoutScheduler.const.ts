import type { IScheduler } from "@naovixen/utilities";

export const timeoutScheduler: IScheduler = {
    schedule: (callback, delayInMilliseconds) => {
        const timeout = setTimeout(callback, delayInMilliseconds);

        return () => {
            clearTimeout(timeout);
        };
    },
};
