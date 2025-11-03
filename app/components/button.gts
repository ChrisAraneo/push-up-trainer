import Component from '@glimmer/component';
import { on } from '@ember/modifier';
import { action } from '@ember/object';

interface ButtonSignature {
  Args: {
    /**
     * Click handler function
     */
    onClick: () => void;
    /**
     * Button variant
     */
    variant?: 'primary' | 'ghost';
    /**
     * Whether the button is disabled
     */
    disabled?: boolean;
  };
}

const THROTTLE_DELAY_MS = 100;

export default class ButtonComponent extends Component<ButtonSignature> {
  private lastClickTime = 0;

  @action
  handleClick(event: MouseEvent) {
    if (this.args.disabled) {
      return;
    }

    const now = Date.now();

    if (now - this.lastClickTime < THROTTLE_DELAY_MS) {
      return;
    }

    this.lastClickTime = now;

    this.createRipple(event);

    if (this.args.onClick) {
      this.args.onClick();
    }
  }

  private get variant() {
    return this.args.variant || 'primary';
  }

  private createRipple(event: MouseEvent) {
    const button = event.currentTarget as HTMLButtonElement;
    const previousRipple = button.getElementsByClassName('ripple')[0];

    if (previousRipple) {
      previousRipple.remove();
    }

    const currentRipple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const rect = button.getBoundingClientRect();

    currentRipple.style.width = currentRipple.style.height = `${diameter}px`;
    currentRipple.style.left = `${event.clientX - rect.left - radius}px`;
    currentRipple.style.top = `${event.clientY - rect.top - radius}px`;
    currentRipple.classList.add('ripple');

    button.appendChild(currentRipple);
  }

  <template>
    <button
      type="button"
      class="button {{this.variant}}"
      disabled={{@disabled}}
      {{on "click" this.handleClick}}
    >
      {{yield}}
    </button>
  </template>
}
