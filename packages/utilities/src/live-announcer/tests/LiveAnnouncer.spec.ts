import { beforeEach, describe, expect, test } from "vitest";
import type { ILiveRegion } from "../interfaces/ILiveRegion";
import type { IScheduler } from "../interfaces/IScheduler";
import { LiveAnnouncer } from "../LiveAnnouncer";

class FakeRegion implements ILiveRegion {
    public text = "";

    public write(message: string): void {
        this.text = message;
    }

    public clear(): void {
        this.text = "";
    }
}

class FakeScheduler implements IScheduler {
    private _pending: { callback: () => void; dueAt: number }[] = [];
    private _now = 0;

    public schedule(callback: () => void, delayInMilliseconds: number): () => void {
        const task = { callback, dueAt: this._now + delayInMilliseconds };
        this._pending.push(task);

        return () => {
            this._pending = this._pending.filter((pending) => pending !== task);
        };
    }

    public advance(milliseconds: number): void {
        this._now += milliseconds;
        const due = this._pending.filter((task) => task.dueAt <= this._now);
        this._pending = this._pending.filter((task) => task.dueAt > this._now);
        due.forEach((task) => {
            task.callback();
        });
    }
}

let scheduler: FakeScheduler;
let region: FakeRegion;
let announcer: LiveAnnouncer;

beforeEach(() => {
    scheduler = new FakeScheduler();
    region = new FakeRegion();
    announcer = new LiveAnnouncer(scheduler);
    announcer.connect(region);
});

describe("Using LiveAnnouncer, given a message already on show, when the same message is announced again", () => {
    beforeEach(() => {
        announcer.announce("Saved");
        scheduler.advance(200);
        announcer.announce("Saved");
    });

    test("then it should empty the region first", () => {
        expect(region.text).toBe("");
    });

    test("then it should write the message again a moment later", () => {
        scheduler.advance(200);

        expect(region.text).toBe("Saved");
    });
});

describe("Using LiveAnnouncer, when several messages are announced in quick succession", () => {
    test("then it should write only the last", () => {
        announcer.announce("Loading");
        scheduler.advance(50);
        announcer.announce("Loaded");
        scheduler.advance(200);

        expect(region.text).toBe("Loaded");
    });
});

describe("Using LiveAnnouncer, given a written message, when five minutes pass", () => {
    test("then it should clear the region", () => {
        announcer.announce("Saved");
        scheduler.advance(200);
        scheduler.advance(5 * 60 * 1000);

        expect(region.text).toBe("");
    });
});

describe("Using LiveAnnouncer, when the region disconnects before the message is written", () => {
    test("then it should write nothing", () => {
        const disconnect = announcer.connect(region);
        announcer.announce("Saved");
        disconnect();
        scheduler.advance(200);

        expect(region.text).toBe("");
    });
});
