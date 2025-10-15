import Component from '@glimmer/component';
import Button from './button';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faPause, faStop, faPlay, faCog } from '@fortawesome/free-solid-svg-icons';

interface ControlsSignature {
  Args: {
    /**
     * Whether the timer is running
     */
    isRunning: boolean;
    /**
     * Whether the timer is paused
     */
    isPaused: boolean;
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
  <template>
    <div class='controls'>
      {{#if @isRunning}}
        {{#if @isPaused}}
          <Button @onClick={{@onStart}}>
            <FaIcon @icon={{faPlay}} />
            Resume
          </Button>
        {{else}}
          <Button @onClick={{@onPause}}>
            <FaIcon @icon={{faPause}} />
            Pause
          </Button>
        {{/if}}
      {{else}}
        <Button @onClick={{@onStart}}>
          <FaIcon @icon={{faPlay}} />
          Start
        </Button>
      {{/if}}

      <Button @onClick={{@onStop}}>
        <FaIcon @icon={{faStop}} />
        Stop
      </Button>
    </div>
  </template>
}
