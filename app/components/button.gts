import Component from '@glimmer/component';
import { on } from '@ember/modifier';

interface ButtonSignature {
  Args: {
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

export const Button: TOC<ButtonSignature> = <template>
  <button
    type="button"
    class="btn"
    disabled={{@disabled}}
    {{on "click" @onClick}}
  >
    {{yield}}
  </button>
</template>;

export default Button;
