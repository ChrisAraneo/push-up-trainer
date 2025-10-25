import Component from '@glimmer/component';
import lottieAnimation from '../modifiers/lottie-animation';
import { isNumber, isFunction } from 'lodash';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import type { AnimationItem } from 'lottie-web';
import Button from './button';

export const PUSH_UP_ANIMATION_DURATION_MS = 2650; // TODO To be fixed

interface PushUpAnimationSignature {
  Args: {
    /**
     * Duration of one complete animation cycle in milliseconds
     *
     * Examples:
     * - @duration={{1500}} // Fast (1.5 seconds)
     * - @duration={{4000}} // Slow (4 seconds)
     */
    duration: number;
    /**
     * Number of iterations/repetitions of the animation
     * When set, animation will stop after this many cycles
     *
     * Examples:
     * - @iterations={{10}} // Repeat 10 times
     * - @iterations={{undefined}} // Loop infinitely
     */
    iterations: number;
    /**
     * Callback function called when animation component is ready
     */
    onReady: (controls: {
      play: () => void;
      pause: () => void;
      stop: () => void;
      reset: () => void;
    }) => void;
    /**
     * Callback function called when all iterations are complete
     */
    onComplete: () => void;
    /**
     * Callback function called when reset is triggered TODO Needed?
     */
    onReset: () => void;
  };
}

export default class PushUpAnimationComponent extends Component<PushUpAnimationSignature> {
  @tracked private animation: AnimationItem | null = null;
  @tracked private isPlaying = false;
  @tracked private remainingIterations: number | null = null;
  @tracked private initialIterations: number | null = null;
  @tracked private isComplete = false;

  private iterationTimeoutId: number | null = null;
  private iterationStartTime: number | null = null;
  private iterationRemainingTime: number | null = null;

  constructor(owner: unknown, args: PushUpAnimationSignature['Args']) {
    super(owner, args);

    this.initializeIterations();
  }

  private initializeIterations() {
    if (isNumber(this.args.iterations) && this.args.iterations > 0) {
      this.initialIterations = this.args.iterations;
      this.remainingIterations = this.args.iterations;
      this.isComplete = false;
    } else {
      this.initialIterations = null;
      this.remainingIterations = null;
      this.isComplete = false;
    }
  }

  get speed() {
    const { duration } = this.args;

    if (isNumber(duration) && duration > 0) {
      return PUSH_UP_ANIMATION_DURATION_MS / duration;
    }

    return 1.0;
  }

  get duration() {
    return this.args.duration || PUSH_UP_ANIMATION_DURATION_MS;
  }

  private startIterationTimer() {
    if (this.remainingIterations !== null && this.remainingIterations > 0) {
      const timeToWait = this.iterationRemainingTime || this.duration;
      this.iterationStartTime = Date.now();
      this.iterationRemainingTime = null;

      this.iterationTimeoutId = window.setTimeout(() => {
        this.handleIterationComplete();
      }, timeToWait);
    }
  }

  private pauseIterationTimer() {
    if (this.iterationTimeoutId && this.iterationStartTime) {
      const elapsed = Date.now() - this.iterationStartTime;
      const totalTime = this.iterationRemainingTime || this.duration;
      this.iterationRemainingTime = Math.max(0, totalTime - elapsed);

      clearTimeout(this.iterationTimeoutId);
      this.iterationTimeoutId = null;
      this.iterationStartTime = null;
    }
  }

  private clearIterationTimer() {
    if (this.iterationTimeoutId) {
      clearTimeout(this.iterationTimeoutId);
      this.iterationTimeoutId = null;
    }
    this.iterationStartTime = null;
    this.iterationRemainingTime = null;
  }

  @action
  handleIterationComplete() {
    if (this.remainingIterations !== null && this.remainingIterations > 0) {
      this.remainingIterations--;

      if (this.remainingIterations === 0) {
        this.isPlaying = false;
        this.isComplete = true;
        if (this.animation) {
          this.animation.stop();
        }
        this.args.onComplete();
      } else {
        this.startIterationTimer();
      }
    }
  }

  @action
  handleAnimationReady(animation: AnimationItem) {
    this.animation = animation;

    animation.addEventListener('loopComplete', () => {
      if (this.isComplete) {
        animation.stop();
      }
    });

    if (isFunction(this.args.onReady)) {
      this.args.onReady({
        play: this.play.bind(this),
        pause: this.pause.bind(this),
        stop: this.stop.bind(this),
        reset: this.reset.bind(this),
      });
    }
  }

  @action
  play() {
    if (this.isComplete) {
      return;
    }

    if (this.animation && !this.isPlaying) {
      this.animation.play();
      this.isPlaying = true;

      if (this.remainingIterations !== null) {
        this.startIterationTimer();
      }
    }
  }

  @action
  pause() {
    if (this.animation && this.isPlaying) {
      this.animation.pause();
      this.isPlaying = false;

      this.pauseIterationTimer();
    }
  }

  @action
  stop() {
    if (this.animation) {
      this.animation.stop();
      this.isPlaying = false;
    }

    this.clearIterationTimer();
  }

  @action
  reset() {
    this.clearIterationTimer();

    this.initializeIterations();

    if (this.animation) {
      this.animation.stop();
      this.isPlaying = false;
    }

    this.args.onReset();
  }

  willDestroy() {
    super.willDestroy();
    this.clearIterationTimer();
  }

  <template>
    <div
      class="push-up-animation"
      {{lottieAnimation
        path="animations/push-ups.json"
        renderer="svg"
        loop=true
        autoplay=false
        speed=this.speed
        onReady=this.handleAnimationReady
      }}
    ></div>
  </template>
}
