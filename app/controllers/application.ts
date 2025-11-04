import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import type { AnimationControls } from 'push-up-trainer/interfaces/animation-controls';
import type { TimerControls } from 'push-up-trainer/interfaces/timer-controls';
import type { Settings } from 'push-up-trainer/interfaces/settings';
import { cloneDeep, isNumber } from 'lodash';

const STORAGE_KEY = 'push-up-trainer';
const DEFAULT_SETTINGS: Settings = Object.freeze({
  totalSeries: 3,
  repetitionsPerSeries: 5,
  seriesDuration: 10000,
  repetitionDuration: 1000,
  darkMode: false,
});

export default class ApplicationController extends Controller {
  @tracked settings: Settings;
  @tracked animationControls: AnimationControls | undefined;
  @tracked timerControls: TimerControls | undefined;
  @tracked isCountdownRunning = false;
  @tracked isRunning = false;
  @tracked isPaused = false;
  @tracked isDifficultySelectorExpanded = true;

  constructor() {
    // eslint-disable-next-line prefer-rest-params
    super(...arguments);

    this.settings = this.loadSettingsFromStorage();
    this.handleSettingsChange(this.settings);
  }

  @action
  handleTimerReady(controls: TimerControls) {
    this.timerControls = controls;
  }

  @action
  handleAnimationReady(controls: AnimationControls) {
    this.animationControls = controls;
  }

  @action
  start() {
    if (!this.timerControls || !this.animationControls) {
      return;
    }

    this.timerControls.start();

    if (this.isPaused) {
      this.animationControls.play();
    }
    
    this.isRunning = true;
    this.isPaused = false;
  }

  @action
  handleCountdownStart() {
    if (this.animationControls) {
      this.animationControls.reset();
    }

    this.isCountdownRunning = true;
  }

  @action
  handleCountdownComplete() {
    if (this.animationControls) {
      this.animationControls.play();
    }

    this.isCountdownRunning = false;
  }

  @action
  pause() {
    if (!this.timerControls || !this.animationControls) {
      return;
    }

    if (!this.isRunning) {
      return;
    }

    this.timerControls.pause();
    this.animationControls.pause();
    this.isPaused = true;
  }

  @action
  stop() {
    if (!this.timerControls || !this.animationControls) {
      return;
    }

    this.timerControls.reset();
    this.animationControls.stop();
    this.isRunning = false;
    this.isPaused = false;
  }

  @action
  reset() {}

  @action
  handleTimerComplete(areAllSeriesComplete: boolean) {
    if (this.animationControls) {
      this.animationControls.reset();

      if (!areAllSeriesComplete) {
        this.animationControls.play();
      }
    }

    if (areAllSeriesComplete) {
      this.isRunning = false;
      this.isPaused = false;
    }
  }

  @action
  handleSettingsChange(settings: Settings) {
    this.settings = cloneDeep(settings);

    this.saveSettingsToStorage(settings);

    if (this.timerControls && this.animationControls) {
      this.timerControls.reset();

      this.animationControls.stop();
      this.animationControls.reset();

      this.isRunning = false;
      this.isPaused = false;
    }
  }

  @action
  handleToggleExpand(expanded: boolean) {
    this.isDifficultySelectorExpanded = expanded;
  }

  private loadSettingsFromStorage(): Settings {
    let settings: Settings | null = null;

    try {
      const value = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || 'null',
      ) as Settings;

      if (
        value &&
        isNumber(value.totalSeries) &&
        isNumber(value.repetitionsPerSeries) &&
        isNumber(value.seriesDuration) &&
        isNumber(value.repetitionDuration)
      ) {
        settings = {
          totalSeries: Math.floor(value.totalSeries),
          repetitionsPerSeries: Math.floor(value.repetitionsPerSeries),
          seriesDuration: Math.floor(value.seriesDuration),
          repetitionDuration: Math.floor(value.repetitionDuration),
          darkMode: !!(value?.darkMode),
        };
      }
    } catch (error) {
      console.error('Failed to load settings from local storage', error);
    }

    return settings ?? DEFAULT_SETTINGS;
  }

  private saveSettingsToStorage(settings: Settings): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
      console.error('Failed to save settings to local storage', error);
    }
  }
}
