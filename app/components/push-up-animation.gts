import Component from '@glimmer/component';
import lottieAnimation from '../modifiers/lottie-animation';
import { isNumber } from 'lodash';

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
  };
}

export default class PushUpAnimationComponent extends Component<PushUpAnimationSignature> {
  get speed() {
    const { duration } = this.args;

    if (isNumber(duration) && duration > 0) {
      return PUSH_UP_ANIMATION_DURATION_MS / duration;
    }

    return 1.0;
  }

  <template>
    <div
      class="push-up-animation"
      {{lottieAnimation
        path="animations/push-ups.json"
        renderer="svg"
        loop=true
        autoplay=true
        speed=this.speed
      }}
    ></div>
  </template>
}
