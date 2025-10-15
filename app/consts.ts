import type { Settings } from "./interfaces/settings";

export const STORAGE_KEY = 'push-up-trainer';
export const DEFAULT_SETTINGS: Settings = Object.freeze({
  series: 3,
  repetitions: 5,
  time: 10,
});
