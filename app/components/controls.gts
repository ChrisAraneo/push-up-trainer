import Component from '@glimmer/component';
import Button from './button';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import {
  faPause,
  faStop,
  faPlay,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import { action } from '@ember/object';

interface ControlsSignature {
  Args: {
    /**
     * Whether the main timer is running
     */
    isRunning: boolean;
    /**
     * Whether the main timer is paused
     */
    isPaused: boolean;
    /**
     * Whether the countdown timer is running
     */
    isCountdownRunning: boolean;
    /**
     * Callback function called when start/resume is clicked
     */
    onStart: () => void;
    /**
     * Callback function called when pause is clicked
     */
    onPause: () => void;
    /**
     * Callback function called when stop is clicked
     */
    onStop: () => void;
  };
}

export default class ControlsComponent extends Component<ControlsSignature> {
  get icon() {
    return !this.args.isRunning || this.args.isPaused ? faPlay : faPause;
  }

  get text() {
    return this.args.isRunning && this.args.isPaused
      ? 'Resume'
      : this.args.isRunning
        ? 'Pause'
        : 'Start';
  }

  @action
  handleClick(event: MouseEvent) {
    if (!this.args.isRunning || this.args.isPaused) {
      this.args.onStart();
    } else {
      this.args.onPause();
    }
  }

  <template>
    <div class="controls">
      <Button @onClick={{this.handleClick}} @disabled={{@isCountdownRunning}}>
        <FaIcon @icon={{this.icon}} />
        {{this.text}}
      </Button>
      <Button @onClick={{@onStop}} @disabled={{@isCountdownRunning}}>
        <FaIcon @icon={{faStop}} />
        Stop
      </Button>
    </div>
  </template>
}
