import Component from '@glimmer/component';
import { on } from '@ember/modifier';
import { action } from '@ember/object';

interface SwitchSignature {
  Args: {
    /**
     * Whether the switch is checked/on
     */
    checked: boolean;
    /**
     * Whether the switch is disabled
     */
    disabled?: boolean;
    /**
     * Change handler function
     */
    onChange: (checked: boolean) => void;
  };
}

export default class SwitchComponent extends Component<SwitchSignature> {
  @action
  handleToggle() {
    if (this.args.disabled) {
      return;
    }

    if (this.args.onChange) {
      this.args.onChange(!this.args.checked);
    }
  }

  <template>
    <label class="switch {{if @disabled 'disabled'}}">
      <button
        type="button"
        class="switch-button {{if @checked 'checked'}}"
        disabled={{@disabled}}
        aria-checked={{@checked}}
        role="switch"
        {{on "click" this.handleToggle}}
      >
        <div class="switch-track"></div>
        <div class="switch-thumb"></div>
      </button>
    </label>
  </template>
}
