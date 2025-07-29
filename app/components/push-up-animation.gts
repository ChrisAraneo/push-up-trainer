import type { TOC } from '@ember/component/template-only';
import lottieAnimation from '../modifiers/lottie-animation';

const PUSH_UP_ANIMATION_DURATION_MS = 2650;

export const PushUpAnimation: TOC = <template>
  <div
    class="push-up-animation"
    {{lottieAnimation
      path="animations/push-ups.json"
      renderer="svg"
      loop=true
      autoplay=true
    }}
  ></div>
</template>;

export default PushUpAnimation;
