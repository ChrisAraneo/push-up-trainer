import Component from '@glimmer/component';
import { on } from '@ember/modifier';

interface ButtonSignature {
  Args: {
    /**
     * The button variant/type which determines styling
     *
     * Examples:
     * - @variant="start"
     * - @variant="pause"
     * - @variant="reset"
     */
    variant: 'start' | 'pause' | 'reset';
    /**
     * Click handler function
     */
    onClick: () => void;
    /**
     * Whether the button is disabled
     */
    disabled?: boolean;
  };
}

export default class ButtonComponent extends Component<ButtonSignature> {
  get classes() {
    const baseClasses = 'timer-btn';
    const variant = `${this.args.variant}-btn`;

    return [baseClasses, variant].join(' ');
  }

  <template>
    <button
      type="button"
      class={{this.classes}}
      disabled={{@disabled}}
      {{on "click" @onClick}}
    >
      {{yield}}
    </button>
  </template>
}
