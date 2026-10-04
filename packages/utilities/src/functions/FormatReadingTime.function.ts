import { translate } from "../constants/Translate.const";

export const formatReadingTime = (minutes: number): string => translate("readingTime", { count: minutes });
