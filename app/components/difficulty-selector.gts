import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Text from './text';
import Button from './button';
import { MAX_LEVEL, MIN_LEVEL } from 'push-up-helper/consts';

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
      <Text>Level {{this.currentLevel}}</Text>
      <Text>{{this.currentLevel}} × 5</Text>
      <Button @onClick={{this.increaseLevel}} @disabled={{this.cannotIncrease}}>
        +
      </Button>
    </div>
  </template>
}
