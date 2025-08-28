import Component from '@glimmer/component';

const DEFAULT_SIZE = 200;
const DEFAULT_STROKE_WIDTH = 8;
const CIRCLE_RADIUS = 90;
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

interface CircularProgressSignature {
  Args: {
    /**
     * Progress percentage from 0 to 100
     */
    progress: number;
    /**
     * Size of the circle in pixels
     * @default 200
     */
    size?: number;
    /**
     * Stroke width of the circle
     * @default 8
     */
    strokeWidth?: number;
    /**
     * Background stroke color
     * @default "rgba(210,210,210,0.7)"
     */
    backgroundStroke?: string;
    /**
     * Progress stroke color
     * @default "#00A3EF"
     */
    progressStroke?: string;
  };
  Blocks: {
    default: [];
  };
}

export default class CircularProgressComponent extends Component<CircularProgressSignature> {
  get size() {
    return this.args.size || DEFAULT_SIZE;
  }

  get strokeWidth() {
    return this.args.strokeWidth || DEFAULT_STROKE_WIDTH;
  }

  get backgroundStroke() {
    return this.args.backgroundStroke || 'rgba(210,210,210,0.7)';
  }

  get progressStroke() {
    return this.args.progressStroke || '#00A3EF';
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
    return this.size / 2;
  }

  get viewBox() {
    return `0 0 ${this.size} ${this.size}`;
  }

  <template>
    <div class="circular-progress">
      <svg width={{this.size}} height={{this.size}} viewBox={{this.viewBox}}>
        <circle
          cx={{this.center}}
          cy={{this.center}}
          r={{this.radius}}
          fill="transparent"
          stroke={{this.backgroundStroke}}
          stroke-width={{this.strokeWidth}}
        />
        <circle
          cx={{this.center}}
          cy={{this.center}}
          r={{this.radius}}
          fill="transparent"
          stroke={{this.progressStroke}}
          stroke-width={{this.strokeWidth}}
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
