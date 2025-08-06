import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import type { AnimationControls } from 'push-up-helper/interfaces/animation-controls';
import type { TimerControls } from 'push-up-helper/interfaces/timer-controls';

export default class ApplicationController extends Controller {
  @tracked timerControls: TimerControls | undefined;
  @tracked animationControls: AnimationControls | undefined;
  @tracked isRunning = false;
  @tracked isPaused = false;

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
  handleTimerComplete() {
    if (this.animationControls) {
      this.animationControls.reset();
    }

    this.isRunning = false;
    this.isPaused = false;
  }
}
