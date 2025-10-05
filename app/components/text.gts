import Component from '@glimmer/component';

interface TextSignature {
  Args: {
    /**
     * Apply monospace font family
     * @default false
     */
    monospace?: boolean;
    /**
     * Apply light color
     * @default false
     */
    light?: boolean;
  };
  Blocks: {
    default: [];
  };
}

export default class TextComponent extends Component<TextSignature> {
  get cssClasses() {
    const classes = ['text'];

    if (this.args.light) {
      classes.push('text--light');
    } else {
      classes.push('text--normal');
    }

    if (this.args.monospace) {
      classes.push('text--monospace');
    }

    return classes.join(' ');
  }

  <template>
    <span class={{this.cssClasses}}>{{yield}}</span>
  </template>
}

export { TextComponent as Text };
