import type { TOC } from '@ember/component/template-only';
import lottieAnimation from '../modifiers/lottie-animation';

export const PushUpAnimation: TOC = <template>
  <div
    class="lottie-container"
    {{lottieAnimation
      path="animations/push-ups.json"
      renderer="svg"
      loop=true
      autoplay=true
    }}
  ></div>
</template>;

export default PushUpAnimation;
