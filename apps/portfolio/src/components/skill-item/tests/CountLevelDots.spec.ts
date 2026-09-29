import { describe, expect, test } from 'vitest';

import { SkillLevel } from '../../../enums/SkillLevel';
import { countLevelDots } from '../functions/CountLevelDots.function';

describe('Using countLevelDots', () => {
    describe('when the level is learning', () => {
        test('then it should fill one dot', () => {
            expect(countLevelDots(SkillLevel.Learning)).toBe(1);
        });
    });

    describe('when the level is confident', () => {
        test('then it should fill two dots', () => {
            expect(countLevelDots(SkillLevel.Confident)).toBe(2);
        });
    });

    describe('when the level is advanced', () => {
        test('then it should fill three dots', () => {
            expect(countLevelDots(SkillLevel.Advanced)).toBe(3);
        });
    });

    describe('when the level is expert', () => {
        test('then it should fill all four dots', () => {
            expect(countLevelDots(SkillLevel.Expert)).toBe(4);
        });
    });
});
