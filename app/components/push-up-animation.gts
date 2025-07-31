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
    duration?: number;
    /**
     * Callback function called when animation component is ready
     */
    onReady?: (controls: {
      play: () => void;
      pause: () => void;
      stop: () => void;
    }) => void;
  };
}

export default class PushUpAnimationComponent extends Component<PushUpAnimationSignature> {
  @tracked private animation: AnimationItem | null = null;
  @tracked private isPlaying = false;

  get speed() {
    const { duration } = this.args;

    if (isNumber(duration) && duration > 0) {
      return PUSH_UP_ANIMATION_DURATION_MS / duration;
    }

    return 1.0;
  }

  @action
  handleAnimationReady(animation: AnimationItem) {
    this.animation = animation;

    if (isFunction(this.args.onReady)) {
      this.args.onReady({
        play: this.play.bind(this),
        pause: this.pause.bind(this),
        stop: this.stop.bind(this),
      });
    }
  }

  @action
  play() {
    if (this.animation && !this.isPlaying) {
      this.animation.play();
      this.isPlaying = true;
    }
  }

  @action
  pause() {
    if (this.animation && this.isPlaying) {
      this.animation.pause();
      this.isPlaying = false;
    }
  }

  @action
  stop() {
    if (this.animation) {
      this.animation.stop();
      this.isPlaying = false;
    }
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
