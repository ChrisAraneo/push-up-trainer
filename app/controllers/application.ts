import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import type { AnimationControls } from 'push-up-helper/interfaces/animation-controls';
import type { TimerControls } from 'push-up-helper/interfaces/timer-controls';
import { MAX_LEVEL, MIN_LEVEL } from 'push-up-helper/consts';

const STORAGE_KEY = 'push-up-trainer-level';
const DEFAULT_LEVEL = MIN_LEVEL;

export default class ApplicationController extends Controller {
  @tracked timerControls: TimerControls | undefined;
  @tracked animationControls: AnimationControls | undefined;
  @tracked isRunning = false;
  @tracked isPaused = false;
  @tracked currentLevel = this.loadLevelFromStorage();

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
  handleLevelChange(level: number) {
    this.currentLevel = level;

    this.saveLevelToStorage(level);

    if (this.timerControls && this.animationControls) {
      this.timerControls.reset();

      this.animationControls.stop();
      this.animationControls.reset();

      this.isRunning = false;
      this.isPaused = false;
    }
  }

  private loadLevelFromStorage(): number {
    let level: number | null = null;

    try {
      const value = Number(localStorage.getItem(STORAGE_KEY));

      if (!isNaN(value) && value >= MIN_LEVEL && value <= MAX_LEVEL) {
        level = Math.floor(value);
      }
    } catch (error) {
      console.error('Failed to load level from local storage', error);
    }

    return level ?? DEFAULT_LEVEL;
  }

  private saveLevelToStorage(level: number): void {
    try {
      localStorage.setItem(STORAGE_KEY, level.toString());
    } catch (error) {
      console.error('Failed to save level to local storage', error);
    }
  }
}
