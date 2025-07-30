import { modifier } from 'ember-modifier';
import lottie from 'lottie-web';
import type {
  AnimationItem,
  RendererType,
  BMCompleteEvent,
  BMEnterFrameEvent,
} from 'lottie-web';

interface LottieAnimationArgs {
  path: string;
  renderer?: RendererType;
  loop?: boolean;
  autoplay?: boolean;
  onComplete?: (event: BMCompleteEvent) => void;
  onEnterFrame?: (event: BMEnterFrameEvent) => void;
  onError?: () => void;
  onReady?: (animation: AnimationItem) => void;
  animationData?: object;
  name?: string;
  rendererSettings?: object;
  progressiveLoad?: boolean;
  hideOnTransparent?: boolean;
  speed?: number;
}

export default modifier(function lottieAnimation(
  element: HTMLElement,
  _: unknown[],
  named: LottieAnimationArgs,
) {
  const {
    path,
    renderer = 'svg',
    loop = true,
    autoplay = false,
    onComplete,
    onEnterFrame,
    onError,
    onReady,
    speed = 1.0,
    ...otherOptions
  } = named;

  const animation: AnimationItem = lottie.loadAnimation({
    container: element,
    renderer,
    loop,
    autoplay,
    path,
    ...otherOptions,
  });

  animation.setSpeed(speed);

  if (onComplete) {
    animation.addEventListener('complete', onComplete);
  }

  if (onEnterFrame) {
    animation.addEventListener('enterFrame', onEnterFrame);
  }

  animation.addEventListener('data_failed', () => {
    if (onError) {
      onError();
    }
  });

  if (onReady) {
    onReady(animation);
  }

  return () => {
    if (animation) {
      animation.destroy();
    }
  };
});
