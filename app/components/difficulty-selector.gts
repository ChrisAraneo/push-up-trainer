import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Text from './text';
import Button from './button';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';

interface DifficultySelectorSignature {
  Args: {
    /**
     * Trainer application settings
     */
    settings?: Settings;
    /**
     * Callback function called when settings changes
     */
    onSettingsChange?: (settings: Settings) => void; // TODO
  };
}

export default class DifficultySelectorComponent extends Component<DifficultySelectorSignature> {
  constructor(owner: unknown, args: DifficultySelectorSignature['Args']) {
    super(owner, args);
  }

  get seriesDurationInSeconds() {
    return Math.floor(this.args.settings.seriesDuration / 1000);
  }

  @action
  handleEdit() {
    // TODO: Implement
    console.log('Edit button clicked');
  }

  <template>
    <div class="difficulty-selector">
      <div class="row header">
        <Text @light={{true}}>Training plan</Text>
        <Button @onClick={{this.handleEdit}}><FaIcon
            @icon={{faPen}}
          />Edit</Button>
      </div>

      <div class="row">
        <Text @light={{true}}>Series</Text>
        <Text>{{@settings.totalSeries}}</Text>
      </div>

      <div class="row">
        <Text @light={{true}}>Repetitions per series</Text>
        <Text>{{@settings.repetitionsPerSeries}}</Text>
      </div>

      <div class="row">
        <Text @light={{true}}>Time per series</Text>
        <Text>{{this.seriesDurationInSeconds}} sec</Text>
      </div>
    </div>
  </template>
}
