export type Lang = "nl" | "en";

export type L10n = {
  nl: string;
  en: string;
};

export const l10n = (nl: string, en: string): L10n => ({ nl, en });

export type DeepBilingual<T> = T extends string
  ? { nl: string; en: string }
  : T extends Array<infer U>
    ? DeepBilingual<U>[]
    : T extends Record<string, unknown>
      ? { [K in keyof T]: DeepBilingual<T[K]> }
      : T;

export const deepBilingual = <T>(value: T): DeepBilingual<T> => {
  if (typeof value === "string") {
    return { nl: value, en: value } as DeepBilingual<T>;
  }
  if (Array.isArray(value)) {
    return value.map((item) => deepBilingual(item)) as DeepBilingual<T>;
  }
  if (value && typeof value === "object") {
    const result: Record<string, unknown> = {};
    Object.entries(value as Record<string, unknown>).forEach(([key, item]) => {
      result[key] = deepBilingual(item);
    });
    return result as DeepBilingual<T>;
  }
  return value as DeepBilingual<T>;
};
