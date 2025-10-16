import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import type { AnimationControls } from 'push-up-trainer/interfaces/animation-controls';
import type { TimerControls } from 'push-up-trainer/interfaces/timer-controls';
import type { Settings } from 'push-up-trainer/interfaces/settings';
import { DEFAULT_SETTINGS, STORAGE_KEY } from 'push-up-trainer/consts';
import { cloneDeep, isNumber } from 'lodash';

export default class ApplicationController extends Controller {
  @tracked animationControls: AnimationControls | undefined;
  @tracked settings: Settings;
  @tracked timerControls: TimerControls | undefined;
  @tracked timerDuration = 0;
  @tracked isRunning = false;
  @tracked isPaused = false;

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
    this.animationControls.play();
    this.isRunning = true;
    this.isPaused = false;
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
    this.timerDuration = settings.time * 1000;

    this.saveSettingsToStorage(settings);

    if (this.timerControls && this.animationControls) {
      this.timerControls.reset();

      this.animationControls.stop();
      this.animationControls.reset();

      this.isRunning = false;
      this.isPaused = false;
    }
  }

  private loadSettingsFromStorage(): Settings {
    let settings: Settings | null = null;

    try {
      const value = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || 'null',
      ) as Settings;

      if (
        value &&
        isNumber(value.series) &&
        isNumber(value.repetitions) &&
        isNumber(value.time)
      ) {
        settings = {
          series: Math.floor(value.series),
          repetitions: Math.floor(value.repetitions),
          time: Math.floor(value.time),
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
