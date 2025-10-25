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
     * Trainer application settings
     */
    settings: Settings;
    /**
     * Callback function called when timer completes (each round and when all series complete)
     */
    onComplete: (areAllSeriesComplete: boolean) => void;
    /**
     * Callback function called when countdown starts
     */
    onCountdownStart: () => void;
    /**
     * Callback function called when countdown completes and main timer starts
     */
    onCountdownComplete: () => void;
    /**
     * Callback function called when timer component is ready
     */
    onReady: (controls: {
      start: () => void;
      pause: () => void;
      reset: () => void;
    }) => void;
  };
}

const INTERVAL_UPDATE_MS = 5;
const SECOND_MS = 1000;
const COUNTDOWN_DURATION_MS = 5000;
const COLOR_BACKGROUND_STROKE = 'rgba(200,200,200,0.45)';
const COLOR_PRIMARY = '#00aeff';
const START_SOUND_PATH = '/sounds/start.wav';
const COUNTDOWN_SOUND_PATH = '/sounds/countdown.wav';

export default class TimerComponent extends Component<TimerSignature> {
  @tracked private remainingTime: number;
  @tracked private isRunning = false;
  @tracked private isPaused = false;
  @tracked private isBreak = false;
  @tracked private isCountdown = false;
  @tracked private countdownRemaining = 0;
  @tracked private currentSeries = 0;
  @tracked private currentRepetitions = 0;

  private intervalId: number | null = null;
  private countdownIntervalId: number | null = null;
  private startTime = 0;
  private pausedTime = 0;

  constructor(owner: unknown, args: TimerSignature['Args']) {
    super(owner, args);

    this.remainingTime = this.seriesDuration;
    this.currentRepetitions = 0;
    this.isBreak = false;
    this.isCountdown = false;
    this.countdownRemaining = 0;
    this.currentSeries = 0;

    soundPlayer.load(START_SOUND_PATH);
    soundPlayer.load(COUNTDOWN_SOUND_PATH);

    this.args.onReady({
      start: this.start.bind(this),
      pause: this.pause.bind(this),
      reset: this.reset.bind(this),
    });
  }

  get seriesDuration() {
    return this.args.settings.seriesDuration;
  }

  get totalSeries() {
    return this.args.settings.totalSeries;
  }

  get repetitionsPerSeries() {
    return this.args.settings.repetitionsPerSeries;
  }

  get seconds() {
    return Math.floor(this.remainingTime / SECOND_MS);
  }

  get milliseconds() {
    return Math.floor((this.remainingTime % SECOND_MS) / 10);
  }

  get progressPercentage() {
    if (this.isCountdown) {
      return (
        ((COUNTDOWN_DURATION_MS - this.countdownRemaining) /
          COUNTDOWN_DURATION_MS) *
        100
      );
    }

    return (
      ((this.seriesDuration - this.remainingTime) / this.seriesDuration) * 100
    );
  }

  get formattedTime() {
    if (this.isCountdown) {
      const countdownSeconds = Math.floor(this.countdownRemaining / SECOND_MS);
      const countdownMilliseconds = Math.floor(
        (this.countdownRemaining % SECOND_MS) / 10,
      );

      return {
        seconds: countdownSeconds.toString().padStart(2, '0'),
        milliseconds: countdownMilliseconds.toString().padStart(2, '0'),
      };
    }

    return {
      seconds: this.seconds.toString().padStart(2, '0'),
      milliseconds: this.milliseconds.toString().padStart(2, '0'),
    };
  }

  get seriesDisplay() {
    return `${this.currentSeries}/${this.totalSeries}`;
  }

  get repetitionsDisplay() {
    return `${this.currentRepetitions}/${this.repetitionsPerSeries}`;
  }

  @action
  start() {
    if (this.isRunning && !this.isPaused) {
      return;
    }

    if (this.currentSeries >= this.totalSeries) {
      this.reset();
    }

    if (this.isPaused) {
      this.isPaused = false;
      this.startMainTimer();
      return;
    }

    if (this.currentSeries === 0) {
      this.startCountdown();
    } else {
      this.isRunning = true;
      this.startMainTimer();
    }
  }

  private startCountdown() {
    this.isCountdown = true;
    this.countdownRemaining = COUNTDOWN_DURATION_MS;
    this.isRunning = true;

    this.args.onCountdownStart();

    soundPlayer.play(COUNTDOWN_SOUND_PATH);

    const countdownStartTime = Date.now();

    this.countdownIntervalId = window.setInterval(() => {
      const elapsed = Date.now() - countdownStartTime;
      this.countdownRemaining = Math.max(0, COUNTDOWN_DURATION_MS - elapsed);

      if (this.countdownRemaining <= 0) {
        this.finishCountdown();
      }
    }, INTERVAL_UPDATE_MS);
  }

  private finishCountdown() {
    if (this.countdownIntervalId) {
      clearInterval(this.countdownIntervalId);
      this.countdownIntervalId = null;
    }

    this.isCountdown = false;
    this.countdownRemaining = 0;

    this.args.onCountdownComplete();

    this.startMainTimer();
  }

  private startMainTimer() {
    this.startTime = Date.now() - (this.seriesDuration - this.remainingTime);

    this.intervalId = window.setInterval(() => {
      const elapsed = Date.now() - this.startTime;
      this.remainingTime = Math.max(0, this.seriesDuration - elapsed);

      if (this.currentRepetitions < this.repetitionsPerSeries) {
        this.currentRepetitions = Math.floor(
          (this.seriesDuration - this.remainingTime) /
            this.args.settings.repetitionDuration,
        );
      }

      this.isBreak = this.currentRepetitions >= this.repetitionsPerSeries;

      if (this.remainingTime <= 0) {
        this.complete();
      }
    }, INTERVAL_UPDATE_MS);
  }

  @action
  pause() {
    if (!this.isRunning || this.isPaused) {
      return;
    }

    if (this.isCountdown) {
      return;
    }

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
    this.isCountdown = false;
    this.countdownRemaining = 0;
    this.remainingTime = this.seriesDuration;
    this.currentSeries = 0;
    this.currentRepetitions = 0;
    this.isBreak = false;

    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    if (this.countdownIntervalId) {
      clearInterval(this.countdownIntervalId);
      this.countdownIntervalId = null;
    }
  }

  @action
  complete() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    soundPlayer.play(START_SOUND_PATH);

    this.currentSeries++;

    const areAllSeriesComplete = this.currentSeries >= this.totalSeries;

    if (!areAllSeriesComplete) {
      this.currentRepetitions = 0;
      this.isBreak = false;
    }

    this.args.onComplete(areAllSeriesComplete);

    if (this.currentSeries < this.totalSeries) {
      this.remainingTime = this.seriesDuration;

      this.startMainTimer();
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

    if (this.countdownIntervalId) {
      clearInterval(this.countdownIntervalId);
    }
  }

  <template>
    <div class="timer">
      <CircularProgress
        @progress={{this.progressPercentage}}
        @size={{300}}
        @strokeWidth={{10}}
        @backgroundStroke={{COLOR_BACKGROUND_STROKE}}
        @progressStroke={{COLOR_PRIMARY}}
      >
        <div class="display">
          <div class="progress">
            <div class="series">
              <Text @monospace={{true}}>Series:</Text>
              <Text @monospace={{true}}>{{this.seriesDisplay}}</Text>
            </div>
            <div class="repetitions">
              <Text @monospace={{true}}>Repetitions:</Text>
              <Text @monospace={{true}}>{{this.repetitionsDisplay}}</Text>
            </div>
          </div>
          <div class="time">
            <Text
              @monospace={{true}}
            >{{this.formattedTime.seconds}}:{{this.formattedTime.milliseconds}}</Text>
          </div>
          <div class="status">
            {{#if this.isCountdown}}
              <Text @monospace={{true}}>Get ready...
                {{this.formattedTime.seconds}}</Text>
            {{else if this.isPaused}}
              <Text @monospace={{true}}>Timer paused</Text>
            {{else if this.isBreak}}
              <Text @monospace={{true}}>Take a short break</Text>
            {{/if}}
          </div>
        </div>
      </CircularProgress>
    </div>
  </template>
}
