import Component from '@glimmer/component';

const CIRCLE_RADIUS = 135;
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

interface CircularProgressSignature {
  Args: {
    /**
     * Progress percentage from 0 to 100
     */
    progress: number;
    /**
     * Size of the circle in pixels
     */
    size: number;
    /**
     * Stroke width of the circle
     */
    strokeWidth: number;
    /**
     * Background stroke color
     */
    backgroundStroke: string;
    /**
     * Progress stroke color
     */
    progressStroke: string;
  };
  Blocks: {
    default: [];
  };
}

export default class CircularProgressComponent extends Component<CircularProgressSignature> {
  get progressStroke() {
    return this.args.progressStroke;
  }

  get radius() {
    return CIRCLE_RADIUS;
  }

  get circumference() {
    return CIRCUMFERENCE;
  }

  get strokeDashoffset() {
    return this.circumference - (this.args.progress / 100) * this.circumference;
  }

  get center() {
    return this.args.size / 2;
  }

  get viewBox() {
    return `0 0 ${this.args.size} ${this.args.size}`;
  }

  <template>
    <div class="circular-progress">
      <svg width={{@size}} height={{@size}} viewBox={{this.viewBox}}>
        <circle
          cx={{this.center}}
          cy={{this.center}}
          r={{this.radius}}
          fill="transparent"
          stroke={{@backgroundStroke}}
          stroke-width={{@strokeWidth}}
        />
        <circle
          cx={{this.center}}
          cy={{this.center}}
          r={{this.radius}}
          fill="transparent"
          stroke={{this.progressStroke}}
          stroke-width={{@strokeWidth}}
          stroke-linecap="round"
          stroke-dasharray={{this.circumference}}
          stroke-dashoffset={{this.strokeDashoffset}}
          transform="rotate(-90 {{this.center}} {{this.center}})"
          class="progress-circle"
        />
      </svg>
      <div class="circular-progress-content">
        {{yield}}
      </div>
    </div>
  </template>
}
