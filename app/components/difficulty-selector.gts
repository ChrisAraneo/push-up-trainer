import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Button from './button';

interface DifficultySelectorSignature {
  Args: {
    /**
     * Initial difficulty level
     * @default 1
     */
    initialLevel?: number;
    /**
     * Callback function called when level changes
     */
    onLevelChange?: (level: number) => void;
  };
}

const MIN_LEVEL = 1;
const MAX_LEVEL = 99;

export default class DifficultySelectorComponent extends Component<DifficultySelectorSignature> {
  @tracked private currentLevel: number;

  constructor(owner: unknown, args: DifficultySelectorSignature['Args']) {
    super(owner, args);

    this.currentLevel = this.args.initialLevel || MIN_LEVEL;
  }

  get canDecrease() {
    return this.currentLevel > MIN_LEVEL;
  }

  get canIncrease() {
    return this.currentLevel < MAX_LEVEL;
  }

  get cannotDecrease() {
    return !this.canDecrease;
  }

  get cannotIncrease() {
    return !this.canIncrease;
  }

  @action
  decreaseLevel() {
    if (this.canDecrease) {
      this.currentLevel--;
      this.args.onLevelChange?.(this.currentLevel);
    }
  }

  @action
  increaseLevel() {
    if (this.canIncrease) {
      this.currentLevel++;
      this.args.onLevelChange?.(this.currentLevel);
    }
  }

  <template>
    <div class="difficulty-selector">
      <Button @onClick={{this.decreaseLevel}} @disabled={{this.cannotDecrease}}>
        -
      </Button>
      <div class="level-text">
        <span class="label mr-16">Level {{this.currentLevel}}</span><span
        >{{this.currentLevel}} × 5</span>
      </div>
      <Button @onClick={{this.increaseLevel}} @disabled={{this.cannotIncrease}}>
        +
      </Button>
    </div>
  </template>
}
