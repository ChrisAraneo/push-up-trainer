import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked timerControls: {
    start: () => void;
    pause: () => void;
    reset: () => void;
  } | undefined;

  @tracked animationControls: {
    play: () => void;
    pause: () => void;
    stop: () => void;
  } | undefined;

  @tracked isRunning = false;
  @tracked isPaused = false;

  @action
  handleTimerReady(controls: {
    start: () => void;
    pause: () => void;
    reset: () => void;
  }) {
    this.timerControls = controls;
  }

  @action
  handleAnimationReady(controls: {
    play: () => void;
    pause: () => void;
    stop: () => void;
  }) {
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
}
