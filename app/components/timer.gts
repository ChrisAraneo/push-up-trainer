import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Button from './button';
import CircularProgress from './circular-progress';
import { soundPlayer } from '../utils/sound-player';
import Text from './text';

interface TimerSignature {
  Args: {
    /**
     * Total duration of the timer in milliseconds
     *
     * Examples:
     * - @duration={{30000}}
     * - @duration={{60000}}
     */
    duration?: number;
    /**
     * Number of series/rounds to complete
     *
     * Examples:
     * - @series={{5}} // 5 rounds
     * - @series={{undefined}} // Single timer (no series)
     */
    series?: number;
    /**
     * Callback function called when timer completes (each round and when all series complete)
     */
    onComplete?: (areAllSeriesComplete: boolean) => void;
    /**
     * Callback function called on each tick with remaining time
     */
    onTick?: (remainingTime: number) => void;
    /**
     * Callback function called when timer component is ready
     */
    onReady?: (controls: {
      start: () => void;
      pause: () => void;
      reset: () => void;
    }) => void;
  };
}

const DEFAULT_DURATION_MS = 30000;
const INTERVAL_UPDATE_MS = 5;
const SECOND_MS = 1000;
const SOUND_PATH = '/sounds/sound.wav';

export default class TimerComponent extends Component<TimerSignature> {
  @tracked private remainingTime: number;
  @tracked private isRunning = false;
  @tracked private isPaused = false;
  @tracked private currentSeries = 0;

  private intervalId: number | null = null;
  private startTime = 0;
  private pausedTime = 0;

  constructor(owner: unknown, args: TimerSignature['Args']) {
    super(owner, args);

    this.remainingTime = this.duration;
    this.currentSeries = 0;

    soundPlayer.load(SOUND_PATH);

    if (!this.args.onReady) {
      return;
    }

    this.args.onReady({
      start: this.start.bind(this),
      pause: this.pause.bind(this),
      reset: this.reset.bind(this),
    });
  }

  get duration() {
    return this.args.duration || DEFAULT_DURATION_MS;
  }

  get totalSeries() {
    return this.args.series || 1;
  }

  get seconds() {
    return Math.floor(this.remainingTime / SECOND_MS);
  }

  get milliseconds() {
    return Math.floor((this.remainingTime % SECOND_MS) / 10);
  }

  get progressPercentage() {
    return ((this.duration - this.remainingTime) / this.duration) * 100;
  }

  get formattedTime() {
    return {
      seconds: this.seconds.toString().padStart(2, '0'),
      milliseconds: this.milliseconds.toString().padStart(2, '0'),
    };
  }

  get seriesDisplay() {
    return `${this.currentSeries}/${this.totalSeries}`;
  }

  get showSeries() {
    return this.totalSeries > 1;
  }

  @action
  start() {
    if (this.isRunning && !this.isPaused) {
      return;
    }

    if (this.currentSeries >= this.totalSeries) {
      this.reset();
    }

    this.isRunning = true;
    this.isPaused = false;
    this.startTime = Date.now() - (this.duration - this.remainingTime);

    this.intervalId = window.setInterval(() => {
      const elapsed = Date.now() - this.startTime;
      this.remainingTime = Math.max(0, this.duration - elapsed);

      this.args.onTick?.(this.remainingTime);

      if (this.remainingTime <= 0) {
        this.complete();
      }
    }, INTERVAL_UPDATE_MS);
  }

  @action
  pause() {
    if (!this.isRunning || this.isPaused) return;

    this.isPaused = true;

    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  @action
  reset() {
    this.isRunning = false;
    this.isPaused = false;
    this.remainingTime = this.duration;
    this.currentSeries = 0;

    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  @action
  complete() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    soundPlayer.play(SOUND_PATH);

    this.currentSeries++;

    const areAllSeriesComplete = this.currentSeries >= this.totalSeries;

    this.args.onComplete?.(areAllSeriesComplete);

    if (this.currentSeries < this.totalSeries) {
      this.remainingTime = this.duration;
      this.startTime = Date.now();

      this.intervalId = window.setInterval(() => {
        const elapsed = Date.now() - this.startTime;
        this.remainingTime = Math.max(0, this.duration - elapsed);

        this.args.onTick?.(this.remainingTime);

        if (this.remainingTime <= 0) {
          this.complete();
        }
      }, INTERVAL_UPDATE_MS);
    } else {
      this.isRunning = false;
      this.isPaused = false;
      this.remainingTime = 0;
    }
  }

  willDestroy() {
    super.willDestroy();

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  <template>
    <div class="timer-component">
      <CircularProgress @progress={{this.progressPercentage}}>
        <div class="timer-display">
          {{#if this.showSeries}}
            <Text @monospace={{true}}>{{this.seriesDisplay}}</Text>
          {{/if}}
          <div class="time-container">
            <Text @monospace={{true}}>{{this.formattedTime.seconds}}:{{this.formattedTime.milliseconds}}</Text>
          </div>
        </div>
      </CircularProgress>
    </div>
  </template>
}
